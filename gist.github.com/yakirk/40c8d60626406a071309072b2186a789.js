document.write('<link rel="stylesheet" href="https://github.githubassets.com/assets/gist-embed-6671625e2d3e.css">')
document.write('<div id=\"gist131366594\" class=\"gist\">\n    <div class=\"gist-file\" translate=\"no\" data-color-mode=\"light\" data-light-theme=\"light\">\n      <div class=\"gist-data\">\n        <div class=\"js-gist-file-update-container js-task-list-container\">\n  <div id=\"file-gistfile1-txt\" class=\"file my-2\">\n    \n    <div itemprop=\"text\" class=\"Box-body p-0 blob-wrapper data type-shell  \">\n\n        \n<div class=\"js-check-bidi js-blob-code-container blob-code-content\">\n\n  <template class=\"js-file-alert-template\">\n  <div data-view-component=\"true\" class=\"flash flash-warn flash-full d-flex flex-items-center\">\n  <svg aria-hidden=\"true\" height=\"16\" viewBox=\"0 0 16 16\" version=\"1.1\" width=\"16\" data-view-component=\"true\" class=\"octicon octicon-alert\">\n    <path d=\"M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z\"><\/path>\n<\/svg>\n    <span>\n      This file contains bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.\n      <a class=\"Link--inTextBlock\" href=\"https://github.co/hiddenchars\" target=\"_blank\">Learn more about bidirectional Unicode characters<\/a>\n    <\/span>\n\n\n  <div data-view-component=\"true\" class=\"flash-action\">        <a href=\"{{ revealButtonHref }}\" data-view-component=\"true\" class=\"btn-sm btn\">    Show hidden characters\n<\/a>\n<\/div>\n<\/div><\/template>\n<template class=\"js-line-alert-template\">\n  <span aria-label=\"This line has hidden Unicode characters\" data-view-component=\"true\" class=\"line-alert tooltipped tooltipped-e\">\n    <svg aria-hidden=\"true\" height=\"16\" viewBox=\"0 0 16 16\" version=\"1.1\" width=\"16\" data-view-component=\"true\" class=\"octicon octicon-alert\">\n    <path d=\"M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z\"><\/path>\n<\/svg>\n<\/span><\/template>\n\n  <table data-hpc class=\"highlight tab-size js-file-line-container js-code-nav-container js-tagsearch-file\" data-tab-size=\"8\" data-paste-markdown-skip data-tagsearch-lang=\"Shell\" data-tagsearch-path=\"gistfile1.txt\">\n        <tr>\n          <td id=\"file-gistfile1-txt-L1\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"1\"><\/td>\n          <td id=\"file-gistfile1-txt-LC1\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">#!<\/span>/bin/bash <\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-gistfile1-txt-L2\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"2\"><\/td>\n          <td id=\"file-gistfile1-txt-LC2\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-gistfile1-txt-L3\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"3\"><\/td>\n          <td id=\"file-gistfile1-txt-LC3\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">if<\/span> <span class=\"pl-k\">!<\/span> aws s3 ls <span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>s3://<span class=\"pl-smi\">\$1<\/span><span class=\"pl-pds\">&quot;<\/span><\/span> <span class=\"pl-k\">&gt;<\/span> /dev/null <span class=\"pl-k\">2&gt;&amp;1<\/span><span class=\"pl-k\">;<\/span> <span class=\"pl-k\">then<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-gistfile1-txt-L4\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"4\"><\/td>\n          <td id=\"file-gistfile1-txt-LC4\" class=\"blob-code blob-code-inner js-file-line\">  <span class=\"pl-c1\">echo<\/span> <span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>Creating bucket: <span class=\"pl-smi\">\$1<\/span><span class=\"pl-pds\">&quot;<\/span><\/span> <\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-gistfile1-txt-L5\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"5\"><\/td>\n          <td id=\"file-gistfile1-txt-LC5\" class=\"blob-code blob-code-inner js-file-line\">  <span class=\"pl-k\">if<\/span> <span class=\"pl-k\">!<\/span> aws s3 mb <span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>s3://<span class=\"pl-smi\">\$1<\/span><span class=\"pl-pds\">&quot;<\/span><\/span> <span class=\"pl-k\">;<\/span> <span class=\"pl-k\">then<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-gistfile1-txt-L6\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"6\"><\/td>\n          <td id=\"file-gistfile1-txt-LC6\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-c1\">echo<\/span> <span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>Could not create bucket <span class=\"pl-smi\">\$1<\/span><span class=\"pl-pds\">&quot;<\/span><\/span> <\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-gistfile1-txt-L7\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"7\"><\/td>\n          <td id=\"file-gistfile1-txt-LC7\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-c1\">exit<\/span> 1<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-gistfile1-txt-L8\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"8\"><\/td>\n          <td id=\"file-gistfile1-txt-LC8\" class=\"blob-code blob-code-inner js-file-line\">  <span class=\"pl-k\">fi<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-gistfile1-txt-L9\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"9\"><\/td>\n          <td id=\"file-gistfile1-txt-LC9\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">fi<\/span><\/td>\n        <\/tr>\n  <\/table>\n<\/div>\n\n\n    <\/div>\n\n  <\/div>\n<\/div>\n\n      <\/div>\n      <div class=\"gist-meta\">\n        <a href=\"https://gist.github.com/yakirk/40c8d60626406a071309072b2186a789/raw/d1e87678059d265a0f3462ca39975011721ef206/gistfile1.txt\" style=\"float:right\" class=\"Link--inTextBlock\">view raw<\/a>\n        <a href=\"https://gist.github.com/yakirk/40c8d60626406a071309072b2186a789#file-gistfile1-txt\" class=\"Link--inTextBlock\">\n          gistfile1.txt\n        <\/a>\n        hosted with &#10084; by <a class=\"Link--inTextBlock\" href=\"https://github.com\">GitHub<\/a>\n      <\/div>\n    <\/div>\n<\/div>\n')
