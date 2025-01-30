## Getting Started

First, run `npm i` to install dependencies

Then, create a .env with these two lines for the project
```
API_URL=https://eleox-interview-api-7n5su.ondigitalocean.app
HOST_URL=http://localhost:3000
```

Finally, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Decision Making Process

- I used Next.js because I can keep it all in one repo and it is easy to build routes for the project and the API. I also have used it extensively in the past so I was happy to use it.

- For Authorization I opted to use cookies and these are HTTPS cookies so they are done on the server side, and it is more secure. I overall liked my approach for this but the only thing I wish I did better was not prop drilling for the cookies.

- For the API I like to split them into their own files so I had one for logging in and one for the people side of it. The login path returns the header which is then stored in Cookies and then the people path does all of the other things for the project. I think I liked my approach overall but same with the cookie prop drilling I would've made some middleware so that I can check the requests. If I had more time I would've protected the routes that way via Middleware and done some more error handling but I just did some basic error handling.

- For the front end I used Shadcn/ui for the building blocks and it was pretty easy to get it up and running. I just used a grid and separated them out in cards. I believe Anthony said something about putting them in a table but when I realized it I was already about 150 mins into the project and was wrapping it up. I used form validation on the login form and made sure to use zod for type checking and that the inputs were correct. For the display comments I just used some State to make sure everyone's was kept separately, then it get's filtered when rendered. I try not to use a lot of state but I figured it was necessary in a time crunch. If it was for the job I probably would've done some lazy fetching or stored them all in a map then rendered for each person based on a filter. Then finally I added the X button to delete a user but I forgot to add the popup to confirm.

