import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import {ThemeProvider} from "styled-components";
import {Theme} from "./common/style/theme";
import {GlobalStyle} from "./common/style/GlobalStyle";
import {BrowserRouter, createBrowserRouter, RouterProvider} from "react-router-dom";
import {routeConfig} from "./common/router/RouteConfig";
import {router} from "./common/router/router";


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider theme={Theme}>
            <GlobalStyle/>
            <RouterProvider router={router}/>
        </ThemeProvider>
    </StrictMode>
)
