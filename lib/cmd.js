const packageJSON = require("../package.json");

export default class Cmd {
  static help() {
    let str =
      "\r\nhelp: displays this\r\nabout: shows some information about the author\r\nsocials: displays my socials\r\nquit: closes the terminal\r\nclear: clears the display\r\ninfo: shows information about the system\r\nif you find the secret command you'll get rewarded ;)";
    return str;
  }
  static about() {
    return "\r\nI'm a computer enthusiast(idk if that is spelled correctly) that has fun with coding especially webdev";
  }
  static socials() {
    return "\r\nGitHub: https://github.com/neuron-electronics";
  }
  static quit() {
    window.location.href = '/'
  }
  static clear(term) {
    term.clear();
  }
  static info() {
    let str =
      "\r\nApp built on Next.JS V." +
      packageJSON.dependencies.next +
      " using React V." +
      packageJSON.dependencies.react +
      ". Terminal built on XTerm " +
      packageJSON.dependencies.xterm;
    return str;
  }
  static secret() {
    window.location.href = 'https://www.youtube.com/watch?v=xvFZjo5PgG0'
  }
}
