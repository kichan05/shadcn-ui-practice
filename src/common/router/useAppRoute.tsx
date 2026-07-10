import {useNavigate} from "react-router-dom";
import {PageName, routeConfig} from "./RouteConfig";
import {ComponentProps, ComponentType} from "react";


type PageParams<K extends PageName> = ComponentProps<typeof routeConfig[K]["Component"]>;

type PushOption = {}

export function useAppRoute() {
    const navigate = useNavigate();

    const formattingPath = (
        to: PageName,
        params: Record<string, any>,
    ) => {
        const config = routeConfig[to];
        let path = config.path;

        const queryParams = new URLSearchParams();

        if (params) {
            Object.entries(params).forEach(([key, value]) => {
                if (value === undefined || value === null) return;

                const pathKey = `:${key}`;

                if (path.includes(pathKey)) {
                    path = path.replace(pathKey, String(value));
                } else {
                    queryParams.append(key, String(value));
                }
            });
        }

        const queryString = queryParams.toString();
        if (queryString) {
            path += `?${queryString}`;
        }

        return path
    }

    const push = (
        to: PageName,
        args: PageParams<PageName>,
        option?: PushOption
    ) => {
        const path = formattingPath(to, args)
        navigate(path);
    };

    const pop = () => {
        navigate(-1, {replace: true})
    }

    const
        replace = (
            to: PageName,
            args: PageParams<PageName>,
            option?: any
        ) => {
            const path = formattingPath(to, args)
            navigate(path, {replace: true});
        }

    return {
        push,
        pop,
        replace
    }
}