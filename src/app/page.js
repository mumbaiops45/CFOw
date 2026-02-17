import Image from "next/image";
import styles from "./page.module.css";
import Account from "./component/Account.jsx";
import Main from "./component/Main";
import Clients from "./component/Clients";
import Body from "./component/Body";
import VirtualCfo from "./component/VirtualCfo";
import ResearchRev from "./component/ResearchRev";
import Voice from "./component/Voice";
import Event from "./component/Event";
import Task from "./component/Task";
import Contact from "./component/Contact";

export default function Home() {
  return (
    <div>
       <section id="main"><Main /></section>
      <Clients/>
      <section id="body"><Body /></section>
       <VirtualCfo/>
       <Account/>
       <ResearchRev/>
      <section id="voice"><Voice /></section>
      <section id="event"><Event /></section>
      <section id="task"><Task /></section>
      <section id="contact"><Contact /></section>
    </div>
  );
}
