import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "../styles/globals.css";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default MyApp;

//  TODO:
// - Connects to the NASA API (https://api.nasa.gov/)

// - Obtains photos from the 'Mars Rover' endpoint

// - Allows the user to see the photos of each rover (Curiosity, Opportunity and Spirit)

// - The photos list should be paginated showing a max of 25 photos per page (dynamic loading similar to facebook/instagram will be nice, but not required)

// - Allows the user to filter the rover photos by camera

// - By default it shows the latest photos for current day

// - Allows the user to search for photos based on 'Earth Day' date (2020-09-22)

// - Allows the user to search for photos based on the 'Sol' date (2890)

// - A lot of extra points if you include a few tests.

// Optional:
// - Let the user store search parameters as favorites or bookmarks that can be recalled in the future (Local storage is accepted, any serverless way of storing data is also accepted)

// - We don't care about the UX design, but a nicely styled app would get extra points :D

// - We will check for coding style and consistency mostly, we are interested in seeing how you think and organize a project.

// - Please use a linter!

// When you finish the test, push it as a public repository in github, gitlab, bitbucket or similar and send us the repository URL.
