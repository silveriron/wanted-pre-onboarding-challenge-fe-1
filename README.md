### 원티드 프리온보딩 챌린지 사전 과제

챌린지 첫 강의를 듣고 클린 코드란 무엇일까에 대한 생각을 많이 하게 되었습니다. 
강의를 듣기 전에는 구조를 체계적으로 나누고 기능에 따라 코드를 분리해야 한다는 것을 어렴풋이 알고는 있었지만 기능 구현에 급급해서 깊게 생각해보고 고민해서 코드를 작성하지 않았던 것 같습니다.  
강의를 통해 어떤 것들을 생각하면서 코드를 작성해야 하는지를 많이 배울 수 있었고, 리팩토링을 하면서 어떤 차이가 있는지 느낄 수 있었습니다.  

바뀐점

1. 당장은 바뀌지 않지만 나중에 바뀔 수 있는 중복되는 것들 추상화(?)  
  
api url, key값 등 언제든 바뀔 수 있고, 중복되서 사용되는 것들을 고정 값이 아닌 상수로 저장하고 별도로 보관.  
추상화를 통해 홍길동이 아닌 사람으로 불릴 수 있도록 하는 첫걸음...?  
사실 추상화라는 게 아직 명확하게 이해되지 않아서 이정도만 적용해봤습니다.. 더 공부해보겠습니다🫡

2. 컴포넌트와 로직을 분리  
리팩토링 전에는 컴포넌트와 로직을 함께 작성해서 한번에 보기에 이게 어떤 기능을 하는지 알아보려면 시간이 많이 걸린 코드였던거 같습니다.  
세부적인 로직을 따로 분리해내서 컴포넌트를 보면 딱 어떤 기능을 수행하겠구나를 바로 알 수 있도록 노력해봤습니다.

3. 타입 단언 최소화
나는 아는데 타입스크립트는 몰라줘서 답답한 마음에 사용했던 타입 단언(!)을 타입 추론을 통해서 없앨 수 있도록 리팩토링 했습니다.

데모 페이지 : ec2-15-164-99-122.ap-northeast-2.compute.amazonaws.com
localhost를 벗어나보라고 하셔서 배포를 해봤습니다.
