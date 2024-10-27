# wb-table

## 필수 요구사항
- Node.js 20 이상
- Yarn이 없다면: `npm install -g yarn`

## 프로젝트 설치
```bash
# 1. 저장소 복제
git clone [repository-url]

# 2. 프로젝트 폴더로 이동
cd wb-table

# 3. Yarn 버전 설정
yarn set version stable

# 4. 패키지 설치
yarn install
```

❗️ Yarn PnP를 사용하는데, storybook 실행시 node_modules 가 생기셨나요?

https://storybook.js.org/docs/get-started/install#yarn-plugnplay-pnp-support-with-storybook

Plug'n'Play (PnP) 가 활성화된 Yarn의 새 버전에서 실행되는 프로젝트에서 Storybook을 활성화한 경우 node_modules일부 추가 파일과 폴더가 생성되는 것을 알 수 있습니다.
이는 Storybook이 .cache캐시 파일과 기타 데이터를 저장하여 성능을 개선하고 빌드 속도를 높이기 위해 일부 디렉토리(예: )에 의존하기 때문에 알려진 제약 조건입니다.
이러한 파일과 폴더는 안전하게 무시할 수 있으며, .gitignore사용 중인 버전 제어에서 제외하도록 파일을 조정할 수 있습니다.

## VSCode 설정 (필수)
```bash
# 1. VSCode SDK 설치
yarn dlx @yarnpkg/sdks vscode
```

2. TypeScript 버전 설정
- `Cmd + Shift + P` (Mac) / `Ctrl + Shift + P` (Windows)
- "Select TypeScript Version" 검색
- "Use Workspace Version" 선택

## 실행 방법
```bash
yarn dev        # 개발 서버 (http://localhost:3000)
yarn storybook  # 스토리북 (http://localhost:6006)
```

## 주의사항
- 반드시 Yarn을 사용해주세요 (npm install 사용 금지)
- 패키지 설치 시 yarn add / yarn add -D 사용