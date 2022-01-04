import { FunctionComponent } from "react";
import { Switch, Route, useLocation, useRouteMatch } from "react-router";

import { NoMatch } from "@Pages/NoMatch";
import { Where } from "./1where";
import { When } from "./2when";
import { Who } from "./3who";

export const WritePlan: FunctionComponent = () => {
    const { url } = useRouteMatch();
    const location = useLocation();
    return (
        <>
            {/* sdifowjoief */}
            <Switch location={location} key={location.key}>
                <Route path={`${url}/1where`}>
                    <Where />
                </Route>
                <Route path="/writeplan/2when">
                    <When />
                </Route>
                <Route path="/writeplan/3who">
                    <Who />
                </Route>
                <Route path="*">
                    <NoMatch />
                </Route>
            </Switch>
        </>
    );
};
