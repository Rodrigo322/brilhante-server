import { app } from "./main";

const PORT = 3333;

app.listen(PORT || process.env.PORT, () => {
  console.log(`Server is running on port ${PORT || process.env.PORT}`);
});
