import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import "antd/dist/antd.css";
import axios from "axios";
import { Bar } from "react-chartjs-2";

const { Content } = Layout;

const Dashboard = () => {
  const [countryData, setCountryData] = useState({});
  const [dataForChart, setData] = useState({});

  useEffect(() => {
    axios
      .get(
        "https://api.covid19api.com/live/country/switzerland/status/confirmed"
      )
      .then((res) => setCountryData(res.data[0]));
  }, []);

  useEffect(() => {
    let dataObj = {
      labels: ["Confirmed", "Active", "Deaths", "Recovered"],
      datasets: [
        {
          label: `${countryData.Country}`,
          data: [
            countryData.Confirmed,
            countryData.Active,
            countryData.Deaths,
            countryData.Recovered,
          ],
          backgroundColor: ["blue", "red", "black", "green"],
        },
      ],
    };
    setData(dataObj);
  }, [countryData]);

  return (
    <Layout className="site-layout">
      <Content style={{ margin: "0 16px" }}>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 360 }}
        >
          <div className="chart">
            <Bar
              data={dataForChart}
              options={{ maintainAspectRatio: false }}
              height={500}
            />
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default Dashboard;
