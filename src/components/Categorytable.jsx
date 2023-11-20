import { Table } from "antd";
import React from "react";

const columns = [
  {
    title: "Id",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
];

const Categorytable = ({ categories }) => {
  const data = categories.map((item) => {
    return {
      id: item.id,
      name: item.name,
      description: item.description,
    };
  });

  return <Table columns={columns} dataSource={data} />;
};

export default Categorytable;
