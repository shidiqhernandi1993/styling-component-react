import React from "react";
import { Container } from "react-bootstrap";
import { Heading } from "./Home";

export default function About() {
    return (
      <Container id="about" className="py-5 ">
        <Heading>About Me</Heading>
        <p className="text-body-secondary">
        Halo! nama saya SHIDIQ HERNANDI ANDRIAN. Saya adalah alumni lulusan dari 
        INSTITUT PERTANIAN BOGOR jurusan STATISTIKA Fakultas Matematika dan Ilmu Pengetahuan Alam. 
        Saya berumur 29 tahun, bertempat tinggal di kota Bogor. 
        Saya adalah seorang yang ingin terus belajar mengenai dunia website. 
        Saya ingin mempelajari kelas MERN di Eduwork. 
        Dan ini adalah website submission saya di kelas "MERN".
        Harapan saya website ini sebagai submission akhir dan nantinya akan terus berkembang
        sesuai dengan arahan dari Eduwork.
        </p>
      </Container>
    );
  }