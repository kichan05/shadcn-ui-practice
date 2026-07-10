import {ComponentType, ReactNode} from "react";
import {MainPage} from "../page/MainPage";

/*
* routeConfig의 type지정을 위해서 헬퍼함수인 createRoute를 사용해주었습니다.
* PageName을 만들어주기 위해서 routeConfig에 직접적으로 type지정을 못해줍니다.
* */
type RouteItem = { path: string, Component: ComponentType<any> };
function createRoutes<T extends Record<string, RouteItem>>(config: T) {
    return config;
}

export const routeConfig = createRoutes({
    /* 메인 및 마이페이지 */
    MainPage: {path: "/", Component: MainPage},
});

export type PageName = keyof typeof routeConfig;