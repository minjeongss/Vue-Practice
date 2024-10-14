# Vue 분석기 ☁️

## 설치

```
yarn create vite
yarn add vue-router
```

## 실행

```
yarn dev
```

## 컴포넌트 사용법

- script
  - export default: 전체 내용 등록
  - name: 컴포넌트명
  - data: 데이터 등록
  - methods: 함수 등록
  - components: 컴포넌트 리스트 등록, 객체 형태로 등록해야 함에 유의 ⚠️
  - props: 전달받은 props 등록
- template: 컴포넌트 내용 등록
- style: 스타일 등록

```vue
<script></script>
<template></template>
<style></style>
```

## 데이터 및 함수 사용법

- 데이터 등록

```vue
<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
};
</script>
```

- 함수 등록

```vue
<script>
export default {
  methods: {
    counter() {
      this.count++;
    },
  },
};
</script>
```

- 함수 사용

```vue
<template>
  <button @click="counter">UP!</button>
</template>
```

## 데이터 가공 및 실시간 표현 방법

### 데이터 가공

- data: 사용할 데이터 선언
- computed: 기존의 데이터를 활용해 가공한 데이터 선언
- template에서 computed에 선언한 내용 사용

```vue
<script>
export default {
  name: "FullNameInput",
  data() {
    return {
      firstName: "",
      lastName: "",
    };
  },
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
  },
};
</script>
<template>
  <p>이름: {{ fullName }}</p>
</template>
```

### 실시간 데이터 표현

- v-model: 입력에 대한 실시간 데이터 처리

```vue
<template>
  <input type="text" v-model="firstName" placeholder="firstName" />
  <input type="text" v-model="lastName" placeholder="lastName" />
</template>
```

## props 사용법

### 값 전달

- 상위 컴포넌트
  - components: 받는 컴포넌트 등록
  - data: 전달할 데이터 등록
  - template 내부의 컴포넌트: `:별칭="데이터"` 형식으로 데이터 전달

```vue
<script>
import Container from "./Container.vue";
export default {
  name: "Detail",
  components: {
    Container,
  },
  data() {
    return {
      count: 0,
    };
  },
};
</script>
<template>
  <Container :count="count" />
</template>
```

- 하위 컴포넌트
  - props: `데이터: 자료형` 형식으로 props 등록

```vue
<script>
export default {
  name: "Container",
  props: {
    count: Number,
  },
};
</script>

<template>
  <p>현재 카운터 수: {{ count }}</p>
</template>
```

### 함수 전달

- 상위 컴포넌트
  - components: 하위 컴포넌트 등록
  - methods: 전달할 함수 등록
  - template: `@별칭="전달할 함수"` 형식으로 props 등록

```vue
<script>
import Button from "./Button.vue";
export default {
  name: "Detail",
  components: {
    Button,
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    counter() {
      this.count++;
    },
  },
};
</script>

<template>
  <h2>Detail</h2>
  <Button @btnClick="counter" />
</template>
```

- 하위 컴포넌트
  - emits: 상위로부터 전달받은 함수 선언
  - methods: 사용할 함수 내부에 this.$emit('전달받은 함수') 형식으로 props 등록

```vue
<script>
export default {
  name: "Button",
  emits: ["btnClick"],
  methods: {
    handleClick() {
      this.$emit("btnClick");
    },
  },
};
</script>

<template>
  <button @click="handleClick">UP 🚀</button>
</template>
```

## 라우터 사용법

1. vue-router 설치
2. main.js에 router 추가

```js
createApp(App).use(router).mount("#app");
```

3. src/router/index.js에 router 속성 구현

- createRouter
- history: createWebHistory()
- routes: 배열 속 객체로 등록
  - path: URL
  - name: 별칭
  - component: 불러올 컴포넌트

```js
import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: "", name: "home", component: Home }],
});

export default router;
```

4. 사용할 컴포넌트에 router 불러오기

App.vue에서 사용할 예정이다.

- RouterLink: a태그이며, 클릭하면 해당 URL로 이동
  - to: URL
- RouterView: 현재 활성화된 라우트에 따라 보여줄 컴포넌트를 렌더링하는 위치

```vue
<script>
import { RouterLink, RouterView } from "vue-router";
</script>
<template>
  <div id="app">
    <nav>
      <RouterLink to="/">home</RouterLink>
    </nav>
    <RouterView />
  </div>
</template>
```
