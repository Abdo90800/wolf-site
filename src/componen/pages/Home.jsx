"use client";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Avatar from "@mui/joy/Avatar";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import CardActions from "@mui/joy/CardActions";
import Typography from "@mui/joy/Typography";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Container from "@mui/material/Container";
import Image from "next/image";
import cardData from "../../data/cardData";

export default function Home() {
  return (
    <Container sx={{ mt: 10 }}>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {cardData.map((e, index) => (
          <SwiperSlide key={index}>
            <Card
              sx={{
                width: 302,
                maxWidth: "100%",
                height: "169px",
                border: "none",
                borderRadius: "16px",
                overflow: "hidden",
                position: "relative",
                backgroundColor: "white",
                cursor: "pointer",
              }}
            >
              <CardContent sx={{ alignItems: "center", textAlign: "center" }}>
                <Image
                  src={e.photo}
                  alt="image"
                  width={40}
                  height={40}
                  style={{
                    borderRadius: "50%",
                  }}
                />
                <Typography level="body-sm" sx={{ maxWidth: "24ch" }}>
                  {e.description}
                </Typography>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}