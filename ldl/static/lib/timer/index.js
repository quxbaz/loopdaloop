



<!DOCTYPE html>
<html lang="en" class="">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta name="viewport" content="width=1020">
    
    
    <title>quxbaz/timer.js · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="quxbaz/timer.js" name="twitter:title" /><meta content="timer.js - Keeping time all the time with web workers." name="twitter:description" /><meta content="https://avatars2.githubusercontent.com/u/952348?v=3&amp;s=400" name="twitter:image:src" />
      <meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars2.githubusercontent.com/u/952348?v=3&amp;s=400" property="og:image" /><meta content="quxbaz/timer.js" property="og:title" /><meta content="https://github.com/quxbaz/timer.js" property="og:url" /><meta content="timer.js - Keeping time all the time with web workers." property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    
    <meta name="pjax-timeout" content="1000">
    

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="64029FC2:4487:11D43F35:567AF8E7" name="octolytics-dimension-request_id" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;" data-pjax-transient="true" name="analytics-location" />
<meta content="Rails, view, files#disambiguate" data-pjax-transient="true" name="analytics-event" />


  <meta class="js-ga-set" name="dimension1" content="Logged Out">



        <meta name="hostname" content="github.com">
    <meta name="user-login" content="">

        <meta name="expected-hostname" content="github.com">

      <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#4078c0">
      <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

    <meta content="9d2063d3b85cb3ff59220f75edde5bf53ca050a0" name="form-nonce" />

    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-2037283749006a7ebc37dc5a63a365e8cde9e5d0099e83d4a77bba85b03a6623.css" media="all" rel="stylesheet" />
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github2-87b394aa7bb776e9e05abfb54eaa1193404e767a3720d64ff2c8f64c7cfb432b.css" media="all" rel="stylesheet" />
    
    


    <meta http-equiv="x-pjax-version" content="696c3d92b2b36833513e39f2a164890b">

      
  <meta name="description" content="timer.js - Keeping time all the time with web workers.">
  <meta name="go-import" content="github.com/quxbaz/timer.js git https://github.com/quxbaz/timer.js.git">

  <meta content="952348" name="octolytics-dimension-user_id" /><meta content="quxbaz" name="octolytics-dimension-user_login" /><meta content="48452784" name="octolytics-dimension-repository_id" /><meta content="quxbaz/timer.js" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="48452784" name="octolytics-dimension-repository_network_root_id" /><meta content="quxbaz/timer.js" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/quxbaz/timer.js/commits/master.atom" rel="alternate" title="Recent Commits to timer.js:master" type="application/atom+xml">

  </head>


  <body class="logged_out   env-production  vis-public">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>

    
    
    



      
      <div class="header header-logged-out" role="banner">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/" data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
      <span class="mega-octicon octicon-logo-github"></span>
    </a>

    <div class="header-actions" role="navigation">
        <a class="btn btn-primary" href="/join" data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">Sign up</a>
      <a class="btn" href="/login?return_to=%2Fquxbaz%2Ftimer.js" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">Sign in</a>
    </div>

    <div class="site-search repo-scope js-site-search" role="search">
      <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/quxbaz/timer.js/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/quxbaz/timer.js/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <label class="js-chromeless-input-container form-control">
    <div class="scope-badge">This repository</div>
    <input type="text"
      class="js-site-search-focus js-site-search-field is-clearable chromeless-input"
      data-hotkey="s"
      name="q"
      placeholder="Search"
      aria-label="Search this repository"
      data-global-scope-placeholder="Search GitHub"
      data-repo-scope-placeholder="Search"
      tabindex="1"
      autocapitalize="off">
  </label>
</form>
    </div>

      <ul class="header-nav left" role="navigation">
          <li class="header-nav-item">
            <a class="header-nav-link" href="/explore" data-ga-click="(Logged out) Header, go to explore, text:explore">Explore</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/features" data-ga-click="(Logged out) Header, go to features, text:features">Features</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://enterprise.github.com/" data-ga-click="(Logged out) Header, go to enterprise, text:enterprise">Enterprise</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/pricing" data-ga-click="(Logged out) Header, go to pricing, text:pricing">Pricing</a>
          </li>
      </ul>

  </div>
</div>



    <div id="start-of-content" class="accessibility-aid"></div>

      <div id="js-flash-container">
</div>


    <div role="main" class="main-content">
        <div itemscope itemtype="http://schema.org/WebPage">
    <div id="js-repo-pjax-container" class="context-loader-container js-repo-nav-next" data-pjax-container>
      
<div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
  <div class="container repohead-details-container">

    

<ul class="pagehead-actions">

  <li>
      <a href="/login?return_to=%2Fquxbaz%2Ftimer.js"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to watch a repository" rel="nofollow">
    <span class="octicon octicon-eye"></span>
    Watch
  </a>
  <a class="social-count" href="/quxbaz/timer.js/watchers">
    1
  </a>

  </li>

  <li>
      <a href="/login?return_to=%2Fquxbaz%2Ftimer.js"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <span class="octicon octicon-star "></span>
    Star
  </a>

    <a class="social-count js-social-count" href="/quxbaz/timer.js/stargazers">
      0
    </a>

  </li>

  <li>
      <a href="/login?return_to=%2Fquxbaz%2Ftimer.js"
        class="btn btn-sm btn-with-count tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-repo-forked "></span>
        Fork
      </a>

    <a href="/quxbaz/timer.js/network" class="social-count">
      0
    </a>
  </li>
</ul>

    <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public ">
  <span class="octicon octicon-repo "></span>
  <span class="author"><a href="/quxbaz" class="url fn" itemprop="url" rel="author"><span itemprop="title">quxbaz</span></a></span><!--
--><span class="path-divider">/</span><!--
--><strong><a href="/quxbaz/timer.js" data-pjax="#js-repo-pjax-container">timer.js</a></strong>

  <span class="page-context-loader">
    <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
  </span>

</h1>

  </div>
  <div class="container">
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax js-octicon-loaders"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <a href="/quxbaz/timer.js" aria-label="Code" aria-selected="true" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /quxbaz/timer.js">
    <span class="octicon octicon-code "></span>
    Code
</a>
    <a href="/quxbaz/timer.js/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /quxbaz/timer.js/issues">
      <span class="octicon octicon-issue-opened "></span>
      Issues
      <span class="counter">0</span>
</a>
  <a href="/quxbaz/timer.js/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /quxbaz/timer.js/pulls">
    <span class="octicon octicon-git-pull-request "></span>
    Pull requests
    <span class="counter">0</span>
</a>

  <a href="/quxbaz/timer.js/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="pulse /quxbaz/timer.js/pulse">
    <span class="octicon octicon-pulse "></span>
    Pulse
</a>
  <a href="/quxbaz/timer.js/graphs" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors /quxbaz/timer.js/graphs">
    <span class="octicon octicon-graph "></span>
    Graphs
</a>

</nav>

  </div>
</div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    
<div class="repository-meta js-details-container">
  <span class="repository-meta-content">
        Keeping time all the time with web workers.
  </span>

</div>


<div class="overall-summary overall-summary-bottomless">

  <div class="stats-switcher-viewport js-stats-switcher-viewport">
    <div class="stats-switcher-wrapper">
    <ul class="numbers-summary">
      <li class="commits">
        <a data-pjax href="/quxbaz/timer.js/commits/master">
            <span class="octicon octicon-history "></span>
            <span class="num text-emphasized">
              12
            </span>
            commits
        </a>
      </li>
      <li>
        <a data-pjax href="/quxbaz/timer.js/branches">
          <span class="octicon octicon-git-branch "></span>
          <span class="num text-emphasized">
            1
          </span>
          branch
        </a>
      </li>

      <li>
        <a data-pjax href="/quxbaz/timer.js/releases">
          <span class="octicon octicon-tag "></span>
          <span class="num text-emphasized">
            0
          </span>
          releases
        </a>
      </li>

      <li>
        
  <a href="/quxbaz/timer.js/graphs/contributors">
    <span class="octicon octicon-organization "></span>
    <span class="num text-emphasized">
      1
    </span>
    contributor
  </a>
      </li>
    </ul>

      <div class="repository-lang-stats">
        <ol class="repository-lang-stats-numbers">
          <li>
              <a href="/quxbaz/timer.js/search?l=javascript">
                <span class="color-block language-color" style="background-color:#f1e05a;"></span>
                <span class="lang">JavaScript</span>
                <span class="percent">99.0%</span>
              </a>
          </li>
          <li>
              <span class="other">
                <span class="color-block language-color" style="background-color:#ededed;"></span>
                <span class="lang">Other</span>
                <span class="percent">1.0%</span>
              </span>
          </li>
        </ol>
      </div>
    </div>
  </div>

</div>

  <div class="repository-lang-stats-graph js-toggle-lang-stats" title="Click for language details">
    <span class="language-color" aria-label="JavaScript 99.0%" style="width:99.0%; background-color:#f1e05a;" itemprop="keywords">JavaScript</span>
    <span class="language-color" aria-label="Other 1.0%" style="width:1.0%; background-color:#ededed;" itemprop="keywords">Other</span>
  </div>

<include-fragment src="/quxbaz/timer.js/show_partial?partial=tree%2Frecently_touched_branches_list"></include-fragment>

<div class="file-navigation in-mid-page file-navigation-new">
  <div class="right">
    <div class="btn-group">
      
  <button class="btn btn-sm disabled tooltipped tooltipped-n" aria-label="You must be signed in to make or propose changes" type="button">
    New file
  </button>



      <a href="/quxbaz/timer.js/find/master"
        class="btn btn-sm empty-icon right js-show-file-finder"
        data-pjax
        data-hotkey="t"
        data-ga-click="Repository, find file, location:repo overview">
        Find file
      </a>
    </div>
      <div class="file-navigation-options" data-multiple>

        <div class="file-navigation-option">
          <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/users/set_protocol" class="js-set-user-protocol-preference" data-form-nonce="9d2063d3b85cb3ff59220f75edde5bf53ca050a0" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="Qqo9uxGjZHEtrOy7jMZ5kicwAdU3cNxQv4BG8yl7ejH0ks1gNL5UiW4+K5GLw6Q0Ms3yFoSOP2niPM7DnNj37w==" /></div>
            <input type="hidden" name="protocol_type" value="clone">

            <div class="select-menu js-menu-container js-select-menu">
              <div class="input-group js-select-button js-zeroclipboard-container">
                <div class="input-group-button">
  <button type="button" class="btn btn-sm select-menu-button js-menu-target" data-ga-click="Repository, clone HTTPS, location:repo overview">
    HTTPS
  </button>
</div>
<input type="text" class="input-monospace input-mini js-zeroclipboard-target js-url-field" value="https://github.com/quxbaz/timer.js.git" readonly>
<div class="input-group-button">
  <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy "></span></button>
</div>

              </div>

              <div class="select-menu-modal-holder">
                <div class="select-menu-modal js-menu-content" aria-hidden="true">
                  <div class="select-menu-header">
                    <span aria-label="Close" class="octicon octicon-x js-menu-close" role="button"></span>
                    <span class="select-menu-title">Choose a clone URL</span>
                  </div>

                  <div class="select-menu-list js-navigation-container" role="menu">
                      <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                        <span class="select-menu-item-icon octicon octicon-check"></span>
                        <div class="select-menu-item-text">
                          <input type="radio" name="protocol_selector" value="http" checked>
                          <span class="select-menu-item-heading">
                            HTTPS
                            (recommended)
                          </span>
                            <span class="description">
                              Clone with Git or checkout with SVN using the repository's web address.
                            </span>
                          <span class="js-select-button-text hidden-select-button-text">
                            <div class="input-group-button">
  <button type="button" class="btn btn-sm select-menu-button js-menu-target" data-ga-click="Repository, clone HTTPS, location:repo overview">
    HTTPS
  </button>
</div>
<input type="text" class="input-monospace input-mini js-zeroclipboard-target js-url-field" value="https://github.com/quxbaz/timer.js.git" readonly>
<div class="input-group-button">
  <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy "></span></button>
</div>

                          </span>
                        </div>
                      </div>
                  </div>
                  <div class="select-menu-list" role="menu">
                    <a class="select-menu-item select-menu-action" href="https://help.github.com/articles/which-remote-url-should-i-use" target="_blank">
                      <span class="select-menu-item-icon octicon octicon-question"></span>
                      <div class="select-menu-item-text">
                        Learn more about clone URLs
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
</form>        </div>

        <div class="file-navigation-option">
</div>


        <div class="file-navigation-option">
          <a href="/quxbaz/timer.js/archive/master.zip"
             class="btn btn-sm"
             rel="nofollow"
             data-ga-click="Repository, download zip, location:repo overview">
            Download ZIP
          </a>
        </div>
      </div>
  </div>

  
<div class="select-menu js-menu-container js-select-menu left">
  <button class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    title="master"
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <i>Branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span aria-label="Close" class="octicon octicon-x js-menu-close" role="button"></span>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/quxbaz/timer.js/tree/master"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="master">
                master
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>


    <a href="/quxbaz/timer.js/pull/new/master" class="btn btn-sm btn-primary" data-pjax data-ga-click="Repository, new pull request, location:repo overview">
      New pull request
    </a>

  <div class="breadcrumb">
    
  </div>
</div>




  <div class="commit-tease js-details-container">
    <span class="right">
      Latest commit
      <a class="commit-tease-sha" href="/quxbaz/timer.js/commit/46a7bc2f69551a63ee674924ac089b814acceca1" data-pjax>
        46a7bc2
      </a>
      <time datetime="2015-12-23T19:40:21Z" is="relative-time">Dec 23, 2015</time>
    </span>


    <span class="commit-author-section">
      <img alt="@quxbaz" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/952348?v=3&amp;s=40" width="20" />
      <a href="/quxbaz" class="user-mention" rel="author">quxbaz</a>
    </span>

        <a href="/quxbaz/timer.js/commit/46a7bc2f69551a63ee674924ac089b814acceca1" class="message" data-pjax="true" title="Added usage and warning comments.">Added usage and warning comments.</a>
    </span>

  </div>


<div class="file-wrap ">

  <a href="/quxbaz/timer.js/tree/46a7bc2f69551a63ee674924ac089b814acceca1" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

  <table class="files js-navigation-container js-active-navigation-container" data-pjax>


    <tbody>
      <tr class="warning include-fragment-error">
        <td class="icon"><span class="octicon octicon-alert"></span></td>
        <td class="content" colspan="3">Failed to load latest commit information.</td>
      </tr>

        <tr class="js-navigation-item">
          <td class="icon">
            <span class="octicon octicon-file-directory "></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/quxbaz/timer.js/tree/master/tests" class="js-directory-link js-navigation-open" id="b61a6d542f9036550ba9c401c80f00ef-d408b08eb8c255b417f66ceb5910bfe827606f41" title="tests">tests</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/quxbaz/timer.js/commit/a07a9727717a0bdca58ba38cd4bd86de820cf743" class="message" data-pjax="true" title="Added a method for changing the tick interval.">Added a method for changing the tick interval.</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2015-12-23T19:37:05Z" is="time-ago">Dec 23, 2015</time></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <span class="octicon octicon-file-text "></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/quxbaz/timer.js/blob/master/README" class="js-directory-link js-navigation-open" id="c47c7c7383225ab55ff591cb59c41e6b-e69de29bb2d1d6434b8b29ae775ad8c2e48c5391" title="README">README</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/quxbaz/timer.js/commit/c56c94f1317aa587bc588d88821cbdf6052b40c3" class="message" data-pjax="true" title="Initial commit">Initial commit</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2015-12-22T20:37:01Z" is="time-ago">Dec 22, 2015</time></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <span class="octicon octicon-file-text "></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/quxbaz/timer.js/blob/master/bower.json" class="js-directory-link js-navigation-open" id="0a08a7565aba4405282251491979bb6b-2afea5bed37bc5a6be0969c9266c3cf655e854c2" title="bower.json">bower.json</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/quxbaz/timer.js/commit/3d9e07facc3e81b314ef4571500a1887b3face19" class="message" data-pjax="true" title="Changed bower description.">Changed bower description.</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2015-12-23T17:27:45Z" is="time-ago">Dec 23, 2015</time></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <span class="octicon octicon-file-text "></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/quxbaz/timer.js/blob/master/timer.js" class="js-directory-link js-navigation-open" id="e170b33788c82a5f5c16ed0eecf9e604-490c308cf5de24f3b2a141131172d752604e0e7c" title="timer.js">timer.js</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/quxbaz/timer.js/commit/46a7bc2f69551a63ee674924ac089b814acceca1" class="message" data-pjax="true" title="Added usage and warning comments.">Added usage and warning comments.</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2015-12-23T19:40:21Z" is="time-ago">Dec 23, 2015</time></span>
          </td>
        </tr>
    </tbody>
  </table>

</div>


  


  </div>
  <div class="modal-backdrop"></div>
</div>

    </div>
  </div>

    </div>

        <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>
        <li><a href="https://github.com/pricing" data-ga-click="Footer, go to pricing, text:pricing">Pricing</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github " title="GitHub "></span>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2015 <span title="0.04121s from github-fe125-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



    
    
    

    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
        <span class="octicon octicon-x"></span>
      </button>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-ef8eb4a89ee9f3c8b7613307fe589a8f5705817f7cee27bec51ce5e963234abf.js"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-4b6b8e7d11ebb7bce85126d3b4130c80041f2ae6d5d6ef8901a8c0c3f7cb80d2.js"></script>
      
      
      
    <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner hidden">
      <span class="octicon octicon-alert"></span>
      <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
      <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
    </div>
  </body>
</html>

