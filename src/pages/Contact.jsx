import React, { useState, useCallback } from "react";
import TextInput from "./Contact's";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import "./Contact's/Contact.css";
import { Button } from "@mui/material";

export const Contact = (props) => {
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [sendComplete, setSendComplete] = useState(false);

  // Functions triggered by inputting text value
  const inputDescription = useCallback(
    (event) => {
      setDescription(event.target.value);
    },
    [setDescription]
  );

  const inputEmail = useCallback(
    (event) => {
      setEmail(event.target.value);
    },
    [setEmail]
  );

  const inputName = useCallback(
    (event) => {
      setName(event.target.value);
    },
    [setName]
  );

  const validateEmailFormat = (email) => {
    const regex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
    return regex.test(email);
  };

  const validateRequiredInput = (...args) => {
    let isBlank = false;
    for (let i = 0; i < args.length; i = (i + 1) | 0) {
      if (args[i] === "") {
        isBlank = true;
      }
    }
    return isBlank;
  };

  // Slackに問い合わせがあったことを通知する
  const submitForm = () => {
    const isBlank = validateRequiredInput(name, email, description);
    const isValidEmail = validateEmailFormat(email);

    if (isBlank) {
      alert("必須入力欄が空白です。");
      return false;
    } else if (!isValidEmail) {
      alert("メールアドレスの書式が異なります。");
      return false;
    } else {
      const payload = {
        text:
          "お問い合わせがありました\n" +
          "お名前: " +
          name +
          "\n" +
          "メールアドレス: " +
          email +
          "\n" +
          "【問い合わせ内容】\n" +
          description,
      };

      const WEBHOOK_URL =
        "https://hooks.slack.com/services/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";
      // fetchメソッドでフォームの内容をSlackのIncoming Webhook URL に送信する
      fetch(WEBHOOK_URL, {
        method: "POST",
        body: JSON.stringify(payload),
      }).then(() => {
        setSendComplete(!sendComplete);
        setDescription("");
        setEmail("");
        setName("");
        return props.handleClose();
      });
    }
  };

  return (
    <div open={props.open} onClose={props.handleClose} className="ContactPage">
      <Header />
      <p className="sectionTitle">
        <span>C</span>ontact
      </p>
      <div className="ContactForm">
        <p id="message">当サイトについてご意見・ご要望をお聞かせ下さい。</p>
        {sendComplete && (
          <div className="sendComplete">
            <p className="sectionTitle">
              <span>T</span>hanks for
              <br />
              your
              <br />
              cooperation!!
              <br />
              <small>（ご協力ありがとうございます！）</small>
            </p>
          </div>
        )}
        {!sendComplete && (
          <>
            <TextInput
              label={"名前(必須)"}
              multiline={false}
              rows={1}
              value={name}
              type={"text"}
              onChange={inputName}
            />
            <TextInput
              label={"メールアドレス(必須)"}
              multiline={false}
              rows={1}
              value={email}
              type={"email"}
              onChange={inputEmail}
            />
            <TextInput
              label={"お問い合わせ内容(必須)"}
              multiline={true}
              rows={10}
              value={description}
              type={"text"}
              onChange={inputDescription}
            />{" "}
          </>
        )}
      </div>
      <Button
        onClick={submitForm}
        disabled={sendComplete}
        variant="contained"
        id="SendButton"
      >
        send
      </Button>

      <Footer />
    </div>
  );
};
