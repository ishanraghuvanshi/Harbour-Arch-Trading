import { Router, Switch, Route, Redirect } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";

const queryClient = new QueryClient();

function AppRouter() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      {/* The old Services page was retired; send its address to the home page. */}
      <Route path="/services">
        <Redirect to="/" />
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <Router base="/">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <AppRouter />
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </Router>
  );
}

export default App;
