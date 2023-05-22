# plugo-frontend-assignment

## 실행 방법

```
git clone https://github.com/eunoo1995/frontend-assignment.git

npm install

npm start
```

## 사용 스택

**clent** - react / typescript / react-router-dom / react-query / mui

**server** - json-server (mock-data)

## 프로젝트 구조

```
📦src
 ┣ 📂@types
 ┃ ┗ 📜interface.ts
 ┣ 📂api
 ┃ ┣ 📜cart.ts
 ┃ ┣ 📜client.ts
 ┃ ┗ 📜products.ts
 ┣ 📂assets
 ┣ 📂components
 ┃ ┣ 📂admin
 ┃ ┃ ┗ 📜UploadForm.tsx
 ┃ ┣ 📂cart
 ┃ ┃ ┣ 📜CartBoard.tsx
 ┃ ┃ ┗ 📜CartItem.tsx
 ┃ ┣ 📂layout
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂product
 ┃ ┃ ┗ 📜ProductCard.tsx
 ┃ ┗ 📂products
 ┃ ┃ ┣ 📜ProductItem.tsx
 ┃ ┃ ┗ 📜ProductList.tsx
 ┣ 📂hooks
 ┃ ┣ 📜useAddToCart.ts
 ┃ ┣ 📜useCartList.ts
 ┃ ┣ 📜useProduct.ts
 ┃ ┣ 📜useProducts.ts
 ┃ ┣ 📜useRemoveCartItem.ts
 ┃ ┣ 📜useUpdateCartItem.ts
 ┃ ┗ 📜useUploadProduct.ts
 ┣ 📂pages
 ┃ ┣ 📜Cart.tsx
 ┃ ┣ 📜NotFound.tsx
 ┃ ┣ 📜Product.tsx
 ┃ ┣ 📜Products.tsx
 ┃ ┣ 📜Upload.tsx
 ┃ ┗ 📜index.ts
 ┣ 📜App.tsx
 ┗ 📜index.tsx
```

## 구현 사항

### Admin: Create Product

- /admin/upload
- json-server를 활용하여 이미지 업로드는 예시 이미지로 대체

### Product List

- /products
- products data를 받아와 리스트 출력 구현

### Product Detail Page

- /products/:id
- 선택된 상품 상세 페이지
- **Add to Cart Button** 장바구니 담기 기능 구현

### Cart Detail Page

- /cart
- 장바구니 목록 출력, 수량 증감, 삭제 기능 구현
