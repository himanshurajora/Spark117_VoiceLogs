export interface Repo {
  id?: number;
  node_id?: string;
  name?: string;
  full_name?: string;
  private?: boolean;
  owner?: Owner;
  html_url?: string;
  description?: null | string;
  fork?: boolean;
  url?: string;
  forks_url?: string;
  keys_url?: string;
  collaborators_url?: string;
  teams_url?: string;
  hooks_url?: string;
  issue_events_url?: string;
  events_url?: string;
  assignees_url?: string;
  branches_url?: string;
  tags_url?: string;
  blobs_url?: string;
  git_tags_url?: string;
  git_refs_url?: string;
  trees_url?: string;
  statuses_url?: string;
  languages_url?: string;
  stargazers_url?: string;
  contributors_url?: string;
  subscribers_url?: string;
  subscription_url?: string;
  commits_url?: string;
  git_commits_url?: string;
  comments_url?: string;
  issue_comment_url?: string;
  contents_url?: string;
  compare_url?: string;
  merges_url?: string;
  archive_url?: string;
  downloads_url?: string;
  issues_url?: string;
  pulls_url?: string;
  milestones_url?: string;
  notifications_url?: string;
  labels_url?: string;
  releases_url?: string;
  deployments_url?: string;
  created_at?: Date;
  updated_at?: Date;
  pushed_at?: Date;
  git_url?: string;
  ssh_url?: string;
  clone_url?: string;
  svn_url?: string;
  homepage?: null | string;
  size?: number;
  stargazers_count?: number;
  watchers_count?: number;
  language?: null | string;
  has_issues?: boolean;
  has_projects?: boolean;
  has_downloads?: boolean;
  has_wiki?: boolean;
  has_pages?: boolean;
  forks_count?: number;
  mirror_url?: null;
  archived?: boolean;
  disabled?: boolean;
  open_issues_count?: number;
  license?: License | null;
  allow_forking?: boolean;
  is_template?: boolean;
  topics?: string[];
  visibility?: Visibility;
  forks?: number;
  open_issues?: number;
  watchers?: number;
  default_branch?: DefaultBranch;
}

export enum DefaultBranch {
  Main = "main",
  Master = "master",
}

export interface License {
  key?: string;
  name?: string;
  spdx_id?: string;
  url?: null | string;
  node_id?: string;
}

export interface Owner {
  login?: Login;
  id?: number;
  node_id?: NodeID;
  avatar_url?: string;
  gravatar_id?: string;
  url?: string;
  html_url?: string;
  followers_url?: string;
  following_url?: string;
  gists_url?: GistsURL;
  starred_url?: string;
  subscriptions_url?: string;
  organizations_url?: string;
  repos_url?: string;
  events_url?: EventsURL;
  received_events_url?: string;
  type?: Type;
  site_admin?: boolean;
}

export enum EventsURL {
  HTTPSAPIGithubCOMUsersHimanshurajoraEventsPrivacy = "https://api.github.com/users/himanshurajora/events{/privacy}",
}

export enum GistsURL {
  HTTPSAPIGithubCOMUsersHimanshurajoraGistsGistID = "https://api.github.com/users/himanshurajora/gists{/gist_id}",
}

export enum Login {
  Himanshurajora = "himanshurajora",
}

export enum NodeID {
  MDQ6VXNlcjUwODE3OTc0 = "MDQ6VXNlcjUwODE3OTc0",
}

export enum Type {
  User = "User",
}

export enum Visibility {
  Public = "public",
}

export interface Activity {
  id?: string;
  type?: ActivityType;
  actor?: Actor;
  repo?: ActivityRepo;
  payload?: Payload;
  public?: boolean;
  created_at?: Date;
}

export interface Actor {
  id?: number;
  login?: DisplayLogin;
  display_login?: DisplayLogin;
  gravatar_id?: string;
  url?: string;
  avatar_url?: string;
}

export enum DisplayLogin {
  HimanshuJangidहिमांशुजाँगिड़ = "Himanshu Jangid, हिमांशु जाँगिड़",
  Himanshurajora = "himanshurajora",
}

export interface Payload {
  push_id?: number;
  size?: number;
  distinct_size?: number;
  ref?: string;
  head?: string;
  before?: string;
  commits?: Commit[];
  action?: string;
  number?: number;
  pull_request?: PullRequest;
  review?: Review;
  ref_type?: string;
  master_branch?: Branch;
  description?: Description;
  pusher_type?: string;
}

export interface Commit {
  sha?: string;
  author?: Author;
  message?: string;
  distinct?: boolean;
  url?: string;
}

export interface Author {
  email?: Email;
  name?: DisplayLogin;
}

export enum Email {
  IamahalofanGmailCOM = "iamahalofan@gmail.com",
  The50817974HimanshurajoraUsersNoreplyGithubCOM = "50817974+himanshurajora@users.noreply.github.com",
}

export enum Description {
  ReadHowToWriteGoodCode = "Read how to write good code",
}

export enum Branch {
  Master = "master",
}

export interface PullRequest {
  url?: string;
  id?: number;
  node_id?: string;
  html_url?: string;
  diff_url?: string;
  patch_url?: string;
  issue_url?: string;
  number?: number;
  state?: string;
  locked?: boolean;
  title?: string;
  user?: User;
  body?: null | string;
  created_at?: Date;
  updated_at?: Date;
  closed_at?: Date | null;
  merged_at?: Date | null;
  merge_commit_sha?: null | string;
  assignee?: null;
  assignees?: any[];
  requested_reviewers?: any[];
  requested_teams?: any[];
  labels?: any[];
  milestone?: null;
  draft?: boolean;
  commits_url?: string;
  review_comments_url?: string;
  review_comment_url?: string;
  comments_url?: string;
  statuses_url?: string;
  head?: Base;
  base?: Base;
  _links?: PullRequestLinks;
  author_association?: string;
  auto_merge?: null;
  active_lock_reason?: null;
  merged?: boolean;
  mergeable?: null;
  rebaseable?: null;
  mergeable_state?: string;
  merged_by?: User | null;
  comments?: number;
  review_comments?: number;
  maintainer_can_modify?: boolean;
  commits?: number;
  additions?: number;
  deletions?: number;
  changed_files?: number;
}

export interface PullRequestLinks {
  self?: Comments;
  html?: Comments;
  issue?: Comments;
  comments?: Comments;
  review_comments?: Comments;
  review_comment?: Comments;
  commits?: Comments;
  statuses?: Comments;
}

export interface Comments {
  href?: string;
}

export interface Base {
  label?: string;
  ref?: string;
  sha?: string;
  user?: User;
  repo?: BaseRepo;
}

export interface BaseRepo {
  id?: number;
  node_id?: RepoNodeID;
  name?: PurpleName;
  full_name?: FullNameEnum;
  private?: boolean;
  owner?: User;
  html_url?: string;
  description?: Description;
  fork?: boolean;
  url?: string;
  forks_url?: string;
  keys_url?: string;
  collaborators_url?: string;
  teams_url?: string;
  hooks_url?: string;
  issue_events_url?: string;
  events_url?: string;
  assignees_url?: string;
  branches_url?: string;
  tags_url?: string;
  blobs_url?: string;
  git_tags_url?: string;
  git_refs_url?: string;
  trees_url?: string;
  statuses_url?: string;
  languages_url?: string;
  stargazers_url?: string;
  contributors_url?: string;
  subscribers_url?: string;
  subscription_url?: string;
  commits_url?: string;
  git_commits_url?: string;
  comments_url?: string;
  issue_comment_url?: string;
  contents_url?: string;
  compare_url?: string;
  merges_url?: string;
  archive_url?: string;
  downloads_url?: string;
  issues_url?: string;
  pulls_url?: string;
  milestones_url?: string;
  notifications_url?: string;
  labels_url?: string;
  releases_url?: string;
  deployments_url?: string;
  created_at?: Date;
  updated_at?: Date;
  pushed_at?: Date;
  git_url?: GitURL;
  ssh_url?: SSHURL;
  clone_url?: string;
  svn_url?: string;
  homepage?: string;
  size?: number;
  stargazers_count?: number;
  watchers_count?: number;
  language?: Language;
  has_issues?: boolean;
  has_projects?: boolean;
  has_downloads?: boolean;
  has_wiki?: boolean;
  has_pages?: boolean;
  forks_count?: number;
  mirror_url?: null;
  archived?: boolean;
  disabled?: boolean;
  open_issues_count?: number;
  license?: null;
  allow_forking?: boolean;
  is_template?: boolean;
  topics?: Topic[];
  visibility?: Visibility;
  forks?: number;
  open_issues?: number;
  watchers?: number;
  default_branch?: Branch;
}

export enum FullNameEnum {
  Himanshurajora295TheGame = "himanshurajora/295-The-Game",
  HimanshurajoraHimanshurajora = "himanshurajora/himanshurajora",
  HimanshurajoraHimanshurajoraGithubIo = "himanshurajora/himanshurajora.github.io",
  HimanshurajoraReadcode = "himanshurajora/readcode",
}

export enum GitURL {
  GitGithubCOMHimanshurajoraReadcodeGit = "git://github.com/himanshurajora/readcode.git",
}

export enum Language {
  HTML = "HTML",
  TypeScript = "TypeScript",
}

export enum PurpleName {
  Readcode = "readcode",
}

export enum RepoNodeID {
  RKgDOHbXCG = "R_kgDOHbXC_g",
}

export interface User {
  login?: DisplayLogin;
  id?: number;
  node_id?: UserNodeID;
  avatar_url?: string;
  gravatar_id?: string;
  url?: string;
  html_url?: string;
  followers_url?: string;
  following_url?: string;
  gists_url?: GistsURL;
  starred_url?: string;
  subscriptions_url?: string;
  organizations_url?: string;
  repos_url?: string;
  events_url?: EventsURL;
  received_events_url?: string;
  type?: UserType;
  site_admin?: boolean;
}

export enum UserNodeID {
  MDQ6VXNlcjUwODE3OTc0 = "MDQ6VXNlcjUwODE3OTc0",
}

export enum UserType {
  User = "User",
}

export enum SSHURL {
  GitGithubCOMHimanshurajoraReadcodeGit = "git@github.com:himanshurajora/readcode.git",
}

export enum Topic {
  Angular = "angular",
  Nestjs = "nestjs",
  Prisma = "prisma",
}

export interface Review {
  id?: number;
  node_id?: string;
  user?: User;
  body?: string;
  commit_id?: string;
  submitted_at?: Date;
  state?: string;
  html_url?: string;
  pull_request_url?: string;
  author_association?: string;
  _links?: ReviewLinks;
}

export interface ReviewLinks {
  html?: Comments;
  pull_request?: Comments;
}

export interface ActivityRepo {
  id?: number;
  name?: FullNameEnum;
  url?: string;
}

export enum ActivityType {
  CreateEvent = "CreateEvent",
  PullRequestEvent = "PullRequestEvent",
  PullRequestReviewEvent = "PullRequestReviewEvent",
  PushEvent = "PushEvent",
}
