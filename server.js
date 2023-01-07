const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => res.type("html").send(html));

app.listen(port, () => console.log(`Server running on port ${port}`));

const html = `
<!DOCTYPE html>
<html>
<p> Leonardo Correa </p>
</html>
`;
