import { FunctionComponent } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "react-datepicker/dist/react-datepicker.css";

import { TopNav } from "@Components/TopNavBar";
import { Main } from "@Pages/Main";
import { Result } from "@Pages/Result";
import { Settings } from "@Pages/Settings";
import { NoMatch } from "@Pages/NoMatch";
import { WritePlan } from "@Pages/Writeplan";
import { SideNavBar } from "@Components/SideNavBar";

const App: FunctionComponent = () => {
    const location = useLocation();
    return (
        <>
            <TopNav />
            <SideNavBar />
            <div className="pt-24">
                <AnimatePresence exitBeforeEnter>
                    <Switch location={location} key={location.key}>
                        <Route path="/result">
                            <Result />
                        </Route>
                        <Route path="/writeplan">
                            <WritePlan />
                        </Route>
                        <Route path="/settings">
                            <Settings />
                        </Route>
                        <Route exact path="/">
                            <Main />
                        </Route>
                        <Route path="*">
                            <NoMatch />
                        </Route>
                    </Switch>
                </AnimatePresence>
            </div>
        </>
    );
};

export default App;
