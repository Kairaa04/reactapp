import React from "react";
import { useEffect, useState } from "react";
import { Card, Container, Group, Text, Grid } from "@mantine/core";

function Wishlist() {
  const [album, setAlbum] = useState([]);

  useEffect(() => {
    fetch("https://picsum.photos/v2/list")
      .then((response) => response.json())
      .then((json) => setAlbum(json));
  });
  return (
    <>
      <div style={{display:'flex',flexDirection:'column',columnGap:'normal'}}>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link active" href="#">
              Cards
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
            <i style={{ margin: "10px", fontSize: "16px",color:'black' }}
               className="fa  fa-heart"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">
            <i style={{ margin: "10px", fontSize: "16px",color:'black' }} 
                       className="fa fa-thumbs-down fa-sm"></i>
            </a>
          </li>
        </ul>
      </div>
      <Container size={"sm"}>
        <Grid>
          <Grid.Col  span={4}   >
      <Card
            key={album.id}
            shadow="xs"
            padding="md"
            radius="md"
            withBorder
            style={{
              width: "18rem",
              marginBottom: "16px",
            }}
          >
            <Card.Section>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            overflowX: "auto",
          }}
        >
          
            {album.length &&
              album.map((i, t) => {
                return (
                  <div>
                    
                      <img
                        src={i.download_url}
                        alt={album.author}
                        style={{
                          maxWidth: "100%",
                          display: "flex",
                        }}
                      />
                    <Group justify="space-between" mt="md" mb="xs">
                      <Text size="sm">
                        <h4>{i.author}</h4>
                      </Text>
                    </Group>

                    <div>
                      <i
                        style={{ margin: "10px", fontSize: "16px" }}
                        className="fa  fa-heart"
                      ></i>
                   <i style={{ margin: "10px", fontSize: "16px" }} 
                       className="fa fa-thumbs-down fa-sm"></i>
                      
                    </div>
                  </div>
                );
              })}

        </div>
        </Card.Section>
        </Card>
        </Grid.Col>
        </Grid>
      </Container>
      );
    </>
  );  
}

export default Wishlist;
