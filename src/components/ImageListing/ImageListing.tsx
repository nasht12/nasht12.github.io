"use client"
import React, { useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Image from 'next/image';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

interface ImageData {
  img: string;
  title: string;
  rows?: number;
  cols?: number;
  author?: string;
}

interface ItemListProps {
  itemData: ImageData[];
}

export default function QuiltedImageList({ itemData }: ItemListProps) {
    const [selectedImage, setSelectedImage] = useState('');
    const openModal = (image: string) => {
        setSelectedImage(image);
      };
    
      const closeModal = () => {
        setSelectedImage('');
      };

  return (
    <div style={{ height: '100%', overflow: 'auto' }}>
      <ImageList
        sx={{ width: 1200 }}
        variant="quilted"
        cols={4}
        rowHeight={121}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
           <div
              style={{ width: '100%', height: '100%', cursor: 'pointer' }}
              onClick={() => openModal(item.img)}
            >
              <Image
                {...srcset(item.img, 121, item.rows, item.cols)}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                // fill={true}
              />
            </div>
            <Modal
              open={selectedImage === item.img}
              onClose={closeModal}
              aria-labelledby="modal-title"
              aria-describedby="modal-description"
            >
              <div style={{position: 'absolute' as 'absolute', top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  height: 400,
  border: 'none', outline: 'none'
  }}>
     <Box component="span" >
                <img
                  {...srcset(item.img, 120, 4, 4)}
                  alt={item.title}
                //   width={500}
                //   height={500}
                //   fill={true}
                //   priority={true}
                />
                </Box>
              </div>
            </Modal>
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
