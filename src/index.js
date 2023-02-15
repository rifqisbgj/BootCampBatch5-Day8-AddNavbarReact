import React from "react";
import ReactDOM from "react-dom";
import Nav from "./Nav";
import Header from "./Header";

// fungsi untuk menampilkan kustomisasi konten dengan id yang ditentukan
const render = (content, id) => {
  ReactDOM.render(content, document.getElementById(id));
};
// Menampilkan isi dari fungsi -> <NamaFungsi />
// Kalau variable mah langsung aja namaVariable

// menambahkan nilai dari fungsi Nav yang isinya akan ditempatkan pada id nav
render(<Nav />, "nav");
// menambahkan nilai dari fungsi Header yang isinya akan ditempatkan pada id root
render(<Header />, "root");
