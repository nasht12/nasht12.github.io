"use client"
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Image from 'next/image';

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
            <div style={{ width: '100%', height: '100%' }}>
              <Image
                {...srcset(item.img, 121, item.rows, item.cols)}
                alt={item.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
