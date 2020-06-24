import React, { useState, useEffect } from "react";
import { Layout, Table, Radio, Avatar } from "antd";
import Axios from "axios";
import "antd/dist/antd.css";

const { Content } = Layout;

const RickAndMorty = () => {
  const [dataForTable, setData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [active, setActive] = useState("character");

  useEffect(() => {
    let newArr = [];
    if (active === "character") {
      ["Name", "Status", "Species", "Image"].forEach((item) => {
        if (item !== "Image")
          newArr.push({
            title: item,
            dataIndex: item.toLowerCase(),
            key: item.toLowerCase(),
          });
        else
          newArr.push({
            title: item,
            dataIndex: item.toLowerCase(),
            render: (image) => <Avatar size="large" alt={image} src={image} />,
            key: item.toLowerCase(),
          });
      });
      setColumns(newArr);
    } else if (active === "location") {
      ["Name", "Type", "Dimension"].forEach((item) => {
        newArr.push({
          title: item,
          dataIndex: item.toLowerCase(),
          key: item.toLowerCase(),
        });
      });
      setColumns(newArr);
    } else if (active === "episode") {
      ["Name", "Air Date", "Episode"].forEach((item) => {
        if (item === "Air Date")
          newArr.push({
            title: item,
            dataIndex: "air_date",
            key: item.toLowerCase(),
          });
        else
          newArr.push({
            title: item,
            dataIndex: item.toLowerCase(),
            key: item.toLowerCase(),
          });
      });
      setColumns(newArr);
    }
  }, [active]);

  useEffect(() => {
    if (active === "character") {
      Axios.get("https://rickandmortyapi.com/api/character/").then((res) => {
        let newColumns = res.data.results.map((item, index) => {
          return {
            key: index + 1,
            name: item.name,
            status: item.status,
            species: item.species,
            image: item.image,
          };
        });
        setData(newColumns);
      });
    } else if (active === "location") {
      Axios.get("https://rickandmortyapi.com/api/location/").then((res) => {
        let newColumns = res.data.results.map((item, index) => {
          return {
            key: index + 1,
            name: item.name,
            type: item.type,
            dimension: item.dimension,
          };
        });
        setData(newColumns);
      });
    } else if (active === "episode") {
      Axios.get("https://rickandmortyapi.com/api/episode/").then((res) => {
        let newColumns = res.data.results.map((item, index) => {
          return {
            key: index + 1,
            name: item.name,
            air_date: item.air_date,
            episode: item.episode,
          };
        });
        setData(newColumns);
      });
    }
  }, [active]);

  const handleChange = (e) => {
    setActive(e.target.value);
  };

  return (
    <Layout className="site-layout">
      <Content style={{ margin: "0 16px" }}>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 360 }}
        >
          <Radio.Group value={active} onChange={(e) => handleChange(e)}>
            <Radio.Button value="character">Characters</Radio.Button>
            <Radio.Button value="location">Locations</Radio.Button>
            <Radio.Button value="episode">Episodes</Radio.Button>
          </Radio.Group>
          <Table dataSource={dataForTable} columns={columns} />;
        </div>
      </Content>
    </Layout>
  );
};

export default RickAndMorty;
