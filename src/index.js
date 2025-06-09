const express = require("express");
const { PrismaClient } = require("@prisma/client");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const prismaClient = new PrismaClient();

app.use(express.static(path.join(__dirname, "../public")));

app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: false }));

// List all data
app.get("/page", async (req, res) => {
  const data = await prismaClient.portofolio.findMany({
    orderBy: {
      id_portofolio: "asc",
    },
  });
  res.render("page", { data });
});

// Form tambah baru
app.get("/page/new", (req, res) => {
  res.render("form", { portofolio: {}, action: "/page", button: "Add New" });
});

// Create form
app.post("/page", async (req, res) => {
  const { nama_kegiatan, waktu_kegiatan } = req.body;
  await prismaClient.portofolio.create({
    data: { nama_kegiatan: nama_kegiatan, waktu_kegiatan: waktu_kegiatan },
  });
  res.redirect("/page");
});

// 4. Form edit
app.get("/page/edit/:id", async (req, res) => {
  const portofolio = await prismaClient.portofolio.findUnique({
    where: { id_portofolio: parseInt(req.params.id) },
  });
  res.render("form", {
    portofolio,
    action: `/page/edit/${portofolio.id_portofolio}`,
    button: "Update",
  });
});

// 5. Update
app.post("/page/edit/:id", async (req, res) => {
  const { nama_kegiatan, waktu_kegiatan } = req.body;
  await prismaClient.portofolio.update({
    where: { id_portofolio: parseInt(req.params.id) },
    data: { nama_kegiatan: nama_kegiatan, waktu_kegiatan: waktu_kegiatan },
  });
  res.redirect("/page");
});

// 6. Delete
app.post("/page/delete/:id", async (req, res) => {
  await prismaClient.portofolio.delete({
    where: { id_portofolio: parseInt(req.params.id) },
  });
  res.redirect("/page");
});

// root redirect
app.get("/", (req, res) => res.redirect("/page"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () =>
  console.log(`Server listening on port ${PORT}`)
);
