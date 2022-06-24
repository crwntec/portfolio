import { React, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import styles from "../../styles/Home.module.css";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cmd from "../../lib/cmd";

import "xterm/css/xterm.css";

export default function Home() {
  const xtermRef = useRef(null);
  useEffect(() => {
    const initTerminal = async () => {
      const { Terminal } = await import("xterm");
      const { FitAddon } = await import("xterm-addon-fit")
      const { WebLinksAddon  } = await import("xterm-addon-web-links")
      const fitAddon = new FitAddon()
      xtermRef.current = new Terminal({
        cursorBlink: true,
      });
      xtermRef.current.loadAddon(fitAddon)
      xtermRef.current.loadAddon(new WebLinksAddon())
      xtermRef.current.open(document.getElementById("terminal"));
      fitAddon.fit();

      var shellprompt = "$ ";
      xtermRef.current.prompt = () => {
        xtermRef.current.write('\r\n' + shellprompt);
      };
      xtermRef.current.writeln("Welcome to My Portfolio");
      xtermRef.current.writeln("Get some help with 'help'");
      xtermRef.current.writeln("");
      ;
      xtermRef.current.prompt()
      var cmd = ''

      xtermRef.current.onKey(key => {
        const char = key.domEvent.key
        if (char === "Enter" && cmd.length > 0) {
          switch (cmd) {
            case "help":
              xtermRef.current.writeln(Cmd.help())    
              break
            case "about":
              xtermRef.current.writeln(Cmd.about())    
              break
            case "info":
              xtermRef.current.writeln(Cmd.info())       
              break; 
            case "socials":
              xtermRef.current.writeln(Cmd.socials())    
              break;
            case "clear":
              Cmd.clear(xtermRef.current)    
              break;
            case "quit":
              Cmd.quit()
              break
            case "go west":
              Cmd.secret()
              break
            default:
              xtermRef.current.writeln("\nIncorrect cmd!")
              break;
          }
          xtermRef.current.prompt()
          cmd = ''
        } else if (char === "Backspace") {
          xtermRef.current.write("\b \b");
          cmd = cmd.slice(0, cmd.length-1)
        } else {
          xtermRef.current.write(char);
          cmd+=char
        }
      });
      // Add logic with `term`
    };
    initTerminal();
  }, []);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div id="terminal" className={styles.term}/>
      </main>

      <footer className={styles.footer}>
        <p>
          Created with <span>&#10084;</span> by Neuron Electronics
        </p>
      </footer>
    </div>
  );
}
