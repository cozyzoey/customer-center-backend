<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<div align="center">
  <img src="https://res.cloudinary.com/dftuawd1d/image/upload/v1661158581/github/nia_homepage_logo.png" alt="logo" width="200" height="auto">
  
  <h1 align="center">교과용감성AI튜터 고객센터</h1>

  <p>
    '인공지능 학습용 데이터 구축사업' 참여자를 위한 고객센터(백엔드)
  </p>

  <p>
    <a href="https://startsmall.link">데모 보기</a>
  </p>
</div>

<!-- ABOUT THE PROJECT -->

## About The Project

[![스크린샷](https://res.cloudinary.com/dftuawd1d/image/upload/v1661159037/github/nia_homepage_screenshot_skjtuq.png)](https://startsmall.link)

과학기술정보통신부, NIA(AI-허브)가 추진하는 '인공지능 학습용 데이터 구축사업'에 참여하는 1,200명의 데이터 수집 참가자를 위한 고객센터입니다. 고객 응대를 위한 공지사항, FAQ, Q&A 서비스와 사업 참여동의서 제출을 위한 기능을 제공합니다. ([클라이언트 repo 보기](https://github.com/cozyzoey/customer-center-client))

### Headless CMS

관리자가 컨텐츠를 관리할 수 있도록 Headless CMS(`Strapi`)를 적용해 개발했습니다.

### 서버 설정

1. AWS 로드밸런서에서 HTTP 요청을 HTTPS 요청으로 리다이렉트하여 모든 요청에 SSL을 적용합니다.
2. 로드밸런서에서 수신한 요청은 서버 EC2 인스턴스의 HTTP 80포트 전달합니다.
3. Nginx 웹서버에서 HTTP 80포트 요청을 서버가 실행되고 있는 포트로 전달합니다.

### Tech Stack

<!-- https://github.com/Ileriayo/markdown-badges -->

- [![Strapi](https://img.shields.io/badge/strapi-%232E7EEA.svg?style=for-the-badge&logo=strapi&logoColor=white)](https://strapi.io/)
- [![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en/)
- [![MariaDB](https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&logo=mariadb&logoColor=white)](https://mariadb.org/)
- [![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)](https://aws.amazon.com/)
- [![Nginx](https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white)](https://www.nginx.com/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FEATURES -->

## Features

- 공지사항, FAQ, Q&A(Question, Answewr)
- 사용자가 질문 및 댓글을 수정/삭제시에 원래 작성자에게만 권한 부여
- 이메일 계정 및 JWT 인증
- 가입시 이메일 확인, 비밀번호 찾기 기능

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

김반석 - devzoeykim@gmail.com

Project Link: [https://github.com/cozyzoey/customer-center-backend](https://github.com/cozyzoey/customer-center-backend)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- [Strapi - Amazon AWS Deployment](https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/deployment/hosting-guides/amazon-aws.html)
- [Strapi - Nginx Proxying](https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/deployment/optional-software/nginx-proxy.html)
- [Strapi - Create is owner policy](https://docs.strapi.io/developer-docs/latest/guides/is-owner.html)
- [AWS ALB HTTP Redirection To HTTPS](https://aws.amazon.com/ko/premiumsupport/knowledge-center/elb-redirect-http-to-https-using-alb/)
- [@strapi/provider-email-nodemailer](https://market.strapi.io/providers/@strapi-provider-email-nodemailer)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
