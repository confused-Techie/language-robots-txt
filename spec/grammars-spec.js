describe("robots.txt Grammars", () => {
  let grammar = null;

  beforeEach(async () => {
    await atom.packages.activatePackage("language-robots-txt");
  });

  describe("Grammar Test", () => {

    beforeEach(async () => {
      grammar = atom.grammars.grammarForScopeName("source.robotstxt");

    });

    it("Highlights a comment", () => {
      let { tokens } = grammar.tokenizeLine("# A Comment");

      expect(tokens[0]).toEqual({
        value: "# A Comment",
        scopes: [ "source.robotstxt", "comment.line.number-sign" ]
      });

    });

    it("Highlights User-Agent Key Value Pair with asterisk", () => {
      let { tokens } = grammar.tokenizeLine("User-agent: *");

      expect(tokens[0]).toEqual({
        value: "User-agent",
        scopes: [ "source.robotstxt", "support.constant" ]
      });

      expect(tokens[1]).toEqual({
        value: ":",
        scopes: [ "source.robotstxt", "support.constant", "punctuation.separator.key-value" ]
      });

      expect(tokens[2]).toEqual({
        value: " ",
        scopes: [ "source.robotstxt", "support.constant", "string" ]
      });

      expect(tokens[3]).toEqual({
        value: "*",
        scopes: [ "source.robotstxt", "support.constant", "string", "keyword.other" ]
      });

    });

    it("Highlights User-Agent Key Value Pair with known User-Agent", () => {
      let { tokens } = grammar.tokenizeLine("User-agent: archive.org_bot");

      expect(tokens[0]).toEqual({
        value: "User-agent",
        scopes: [ "source.robotstxt", "support.constant" ]
      });

      expect(tokens[1]).toEqual({
        value: ":",
        scopes: [ "source.robotstxt", "support.constant", "punctuation.separator.key-value" ]
      });

      expect(tokens[2]).toEqual({
        value: " ",
        scopes: [ "source.robotstxt", "support.constant", "string" ]
      });

      expect(tokens[3]).toEqual({
        value: "archive.org_bot",
        scopes: [ "source.robotstxt", "support.constant", "string", "support.class" ]
      });

    });

    it("Highlights Allow As Expected", () => {
      let { tokens } = grammar.tokenizeLine("Allow: /includes/bar?foo=bat&bat=foo");

      expect(tokens[0]).toEqual({
        value: "Allow",
        scopes: [ "source.robotstxt", "support.constant" ]
      });

      expect(tokens[1]).toEqual({
        value: ":",
        scopes: [ "source.robotstxt", "support.constant", "punctuation.separator.key-value" ]
      });

      expect(tokens[2]).toEqual({
        value: " ",
        scopes: [ "source.robotstxt", "support.constant", "string" ]
      });

      expect(tokens[3]).toEqual({
        value: "/",
        scopes: [ "source.robotstxt", "support.constant", "string", "punctuation.other" ]
      });

      expect(tokens[4]).toEqual({
        value: "includes",
        scopes: [ "source.robotstxt", "support.constant", "string" ]
      });

      expect(tokens[5]).toEqual({
        value: "/",
        scopes: [ "source.robotstxt", "support.constant", "string", "punctuation.other" ]
      });

      expect(tokens[6]).toEqual({
        value: "bar",
        scopes: [ "source.robotstxt", "support.constant", "string" ]
      });

      expect(tokens[7]).toEqual({
        value: "?",
        scopes: [ "source.robotstxt", "support.constant", "string", "constant.language" ]
      });

      expect(tokens[8]).toEqual({
        value: "foo",
        scopes: [ "source.robotstxt", "support.constant", "string" ]
      });

      expect(tokens[9]).toEqual({
        value: "=",
        scopes: [ "source.robotstxt", "support.constant", "string", "constant.language" ]
      });

      expect(tokens[10]).toEqual({
        value: "bat",
        scopes: [ "source.robotstxt", "support.constant", "string" ]
      });

      expect(tokens[11]).toEqual({
        value: "&",
        scopes: [ "source.robotstxt", "support.constant", "string", "constant.language" ]
      });

      expect(tokens[12]).toEqual({
        value: "bat",
        scopes: [ "source.robotstxt", "support.constant", "string" ]
      });

      expect(tokens[13]).toEqual({
        value: "=",
        scopes: [ "source.robotstxt", "support.constant", "string", "constant.language" ]
      });

      expect(tokens[14]).toEqual({
        value: "foo",
        scopes: [ "source.robotstxt", "support.constant", "string" ]
      });

    });

    it("Highlights Disallow As Expected", () => {
      let { tokens } = grammar.tokenizeLine("Disallow: *");

      expect(tokens[0]).toEqual({
        value: "Disallow",
        scopes: [ "source.robotstxt", "support.constant" ]
      });

      expect(tokens[1]).toEqual({
        value: ":",
        scopes: [ "source.robotstxt", "support.constant", "punctuation.separator.key-value" ]
      });

      expect(tokens[2]).toEqual({
        value: " ",
        scopes: [ "source.robotstxt", "support.constant", "string" ]
      });

      expect(tokens[3]).toEqual({
        value: "*",
        scopes: [ "source.robotstxt", "support.constant", "string", "keyword.other" ]
      });

    });

  });

});
