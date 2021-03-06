import request from '@/utils/request';

export async function getArticleList(params) {
  return request('/api/v1/articles', { params });
}

export async function getArticleDetail(params) {
  let url = "/api/v1/articles";
  if (params.id) {
    url += "/" + params.id;
  } else {
    url += "/0"
  }
  return request(url, {});
}

export async function getAllTags(params) {
  return request('/api/v1/tags/all', { params });
}

export async function getCommentsList(params) {
  return request('/api/v1/comments', { params });
}

export async function createComment(params) {
  return request('/api/v1/auth/comments', { params, method: 'post'});
}

export async function userRegister(params) {
  return request('/api/v0/register', { params, method: 'post'});
}

export async function userLogin(params) {
  return request('/api/v0/auth', { params, method: 'get'});
}

export async function userChangePwd(params) {
  return request('/api/v1/auth/change-pwd', { params, method: 'put'});
}


