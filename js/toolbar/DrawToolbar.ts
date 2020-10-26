import App from "../App";
import {EmptySegment} from "./EmptySegment";
import {ElectronService} from "../ElectronService";

const DrawToolbar = [
    {
        name: "",
        children: "draw-pencil",
        action: (ev: any) => {
            window.app.emit("tilemap:drawingType", 0);
        },           
    },
    {
        name: "",
        children: "draw-rectangle",
        action: (ev: any) => {
            window.app.emit("tilemap:drawingType", 1);
        },           
    },
    {
        name: "",
        children: "draw-ellipse",
        action: (ev: any) => {
            window.app.emit("tilemap:drawingType", 2);
        },              
    },
    {
        name: "",
        children: "draw-flood-fill",
        action: (ev: any) => {
            
        },           
    },
    {
        name: "",
        children: "draw-shadow-pen",
        action: (ev: any) => {
            
        },           
    },
    EmptySegment,
];

export {DrawToolbar};