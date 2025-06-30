import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/login",
  },
});

export const config = {
  matcher: [
    "/profile/:path*",
    "/dashboard/:path*",
    "/settings/:path*",
    // Add other protected routes here
  ],
};
