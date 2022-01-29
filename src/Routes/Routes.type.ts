import React from "react";

type route = [
    {path: string, element: React.ReactChild}
]

type child = [
    {path: string, element: React.ReactChild, children: [route]}
]

export type routesType = [
    {path: string, element: React.ReactChild, children?: [child]}
]