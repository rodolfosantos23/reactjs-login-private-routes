import React from "react";
import { isAuthenticated } from "../services/auth";
import { BrowserRouter, Route, Switch, Redirect, RouteProps, RouteComponentProps } from "react-router-dom";

// Páginas
import Login from "../pages/Login";
import Home from "../pages/Home";

// Rotas privadas - Lógica 
export const PrivateRoute = ({ component, ...rest }: RouteProps) => {
    if (!component) {
        throw Error("Component is Undefined");
    }

    // Component em uppercase
    const Component = component;

    // Render - Se autenticado 
    const render = (props: RouteComponentProps<any>): React.ReactNode => {
        if (isAuthenticated()) {
            return (
                // Aqui pode ser adicionado um template ou HTML padrão
                <div>
                    <Component {...props} />
                </div>
            )
        }

        // Se não estivar autenticado redireciona para o Login
        return (<Redirect to={{ pathname: "/login", state: { from: props.location } }} />)
    };

    // Retorno
    return (<Route {...rest} render={render} />);
}


// Rotas
const Routes = () => (
    <BrowserRouter>
        <Switch>
            {/* Login */}
            <Route path="/login" component={Login} />

            {/* Rotas Privadas */}
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute exact path="/home" component={Home} />

            {/* Not Found */}
            <Route path="*" component={() => <h1>Page not found</h1>} />
        </Switch>
    </BrowserRouter>
);

export default Routes;