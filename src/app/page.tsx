"use client";
import MessageBox, { MessageBoxProps } from "@/components/messageBox";
import { useEffect, useState } from "react";

export default function Home() {
  const [messages, setMessages] = useState<MessageBoxProps[]>([]);
  const [texts, setTexts] = useState<string[]>([
    "Eu ja falei que te amo hj?",
    "Ja sim",
    "Ent vou fla dnv",
    "Eu te amo muito meu amor",
  ]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setMessages((prevState) => {
        return [
          ...prevState,
          {
            text: texts[0],
            isLeft: false,
          },
        ];
      });
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, [texts]);

  useEffect(() => {
    if (messages.length != 0) {
      texts.shift();
    }
  }, [messages, texts]);

  return (
    <main className="bg-red-200 flex h-screen w-screen justify-center items-center">
      <section className="border-2 box-content border-red-400 rounded-lg w-1/2 h-4/5 p-2">
        <div className="flex flex-col gap-4 h-full overflow-y-scroll">
          {messages.map(({ text }, idx) => {
            if (text == undefined) {
              return (
                <MessageBox text={"Eu te amo muito"} key={idx} isLeft={false} />
              );
            }

            console.log(messages);

            if (text == "Ja sim") {
              return <MessageBox text={text} key={text} isLeft />;
            }
            return <MessageBox text={text} key={text} isLeft={false} />;
          })}
        </div>
      </section>
    </main>
  );
}
