import HomeScreen from "./screens/HomeScreen";

export type RouteType = {
path: string;
component: React.ComponentType;
}

export const routes: RouteType[] = [
  {
    path: '/',
    component: HomeScreen
  }
];