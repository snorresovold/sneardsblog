// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route, Private } from '@redwoodjs/router'

import PostsLayout from 'src/layouts/PostsLayout'

import TagsLayout from 'src/layouts/TagsLayout'


const Routes = () => {
  return (
    <Router>

      <Set wrap={PostsLayout}>

        <Route path="/posts/new" page={PostNewPostPage} name="newPost" />

        <Route path="/posts/{id:Int}/edit" page={PostEditPostPage} name="editPost" />

        <Route path="/posts/{id:Int}" page={PostPostPage} name="post" />

        <Route path="/posts" page={PostPostsPage} name="posts" />

      </Set>

      <Route path="/" page={HomePage} name="home" />

      <Private unauthenticated='home'>
        <Set wrap={TagsLayout}>
          <Route path="/tags/new" page={TagNewTagPage} name="newTag" />
          <Route path="/tags/{id:Int}/edit" page={TagEditTagPage} name="editTag" />
          <Route path="/tags/{id:Int}" page={TagTagPage} name="tag" />
          <Route path="/tags" page={TagTagsPage} name="tags" />
        </Set>
      </Private>

      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Route notfound page={NotFoundPage} />

    </Router>
  )
}

export default Routes
