# GoodEva Backend - NestJS Todo API

## 🚀 How to Run

```bash
# Install dependencies
npm install

# Development mode (with hot reload)
npm run start:dev

# Production mode
npm run build
npm run start:prod
```

Server will run at: **http://localhost:_your_server_port**

## 📋 Node Version

- **Node.js**: v18.x or higher
- **npm**: v9.x or higher

## 🛠️ Technical Decisions

### 1. **In-Memory Storage**
Using JavaScript array in service for data storage. Chosen because requirements allow in-memory and it's simpler for demo without database setup.

### 2. **DTO + Class Validator** 
Implementing validation using decorators (`@IsString`, `@IsNotEmpty`) to ensure incoming data matches format. Provides clear error handling and type safety.

### 3. **Lightweight Auth with Header**
Using `x-user-id` header as simple authentication. Easy to test and meets lightweight auth requirement without JWT complexity.

## 📡 API Endpoints

- `GET /api/todos` - Get all todos
- `GET /api/todos?search=keyword` - Search todos  
- `POST /api/todos` - Create new todo
- `PATCH /api/todos/:id` - Toggle completion status

**Required Header**: `x-user-id: user-123`