function padLeft(padding:( number | string), input: string) {
    if (typeof padding === "number") {
      console.log( new Array(padding + 1).join(" ") + input);
    }
    console.log(padding + input);
  }
  padLeft(2,"left");
  function printAll(strs: string | string[] | null) {
    if (strs && typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  }
  printAll(null);
  printAll(["souji","soumya"]);
