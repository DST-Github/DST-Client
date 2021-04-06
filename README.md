# 커밋 메세지 작성법

FIX - 보통 올바르지 않은 동작을 고친 경우에 사용합니다.
ADD - 코드나 테스트, 예제, 문서 등의 추가가 있을 때 사용합니다
REMOVE - 코드의 삭제가 있을 때 사용
REFACTOR - 전면 수정이 있을 때 사용합니다.
UPDATE - 원래도 정상적으로 동작하고 있었지만, 수정, 추가, 보완을 한다는 개념입니다. 코드보다는 주로 문서나 리소스, 라이브러리등에 사용합니다
IMPROVE - 향상이 있을 때 사용합니다. 호환성, 테스트 커버리지, 성능, 검증 기능, 접근성 등 다양한 것들이 목적
MAKE - 주로 기존 동작의 변경을 명시합니다.
REVISE - 문서의 개정이 있을 때 주로 사용합니다.
CORRECT - 주로 문법의 오류나 타입의 변경, 이름 변경 등에 사용합니다.
MOVE - 코드의 이동이 있을 때 사용합니다.
RENAME - 이름 변경이 있을 때 사용합니다.
VERIFY - 검증 코드를 넣을 때 주로 사용합니다.
SET - 변수 값을 변경하는 등의 작은 수정에 주로 사용합니다.

ex) [ADD] Directory Structure Setting

# Branch 생성 및 PR 

Branch는 Publishing 을 하면 feature/publish/${component & page & container 이름} 으로 생성합니다.


작업 완료 후 develop으로 PR을 날리고, Reviewer에 towel1017 추가 해주세요.
<br />
Code Review 이후 수정이 모두 완료가 되면, develop으로 merge 합니다.
