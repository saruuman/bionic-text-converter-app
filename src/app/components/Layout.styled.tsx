"use client";
import styled from "styled-components";
import { Layout as  AntdLayout } from "antd";


const { Header : AntdHeader}= AntdLayout;
export const Layout=styled(AntdLayout)`
.ant-layout-content{
    padding: 80px 80px 0px
    ;
}
header {
background-color: #fff !important;

}
`;

export const Header=styled(AntdHeader)`
background-color: #fff !important;
padding: 0 80px;
`;


