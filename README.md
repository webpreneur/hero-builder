# Hero Builder

A superhero character builder application built with **Angular 20** and **TypeScript**. Create your own custom heroes by adjusting their characteristics (Stamina, Strength, and Speed) and assigning them superpowers!

## Features

- Build custom heroes with unique characteristics
- Adjust hero stats (Stamina, Strength, Speed)
- Assign multiple superpowers to your hero
- Beautiful, responsive UI with gradient backgrounds
- Real-time state management using RxJS
- Type-safe with TypeScript

## Tech Stack

- **Angular 20** - Modern web framework
- **TypeScript** - Type-safe JavaScript
- **RxJS** - Reactive programming
- **pnpm** - Fast, disk space efficient package manager
- **Docker** - Containerization for easy deployment

## Prerequisites

- Node.js 22.x or higher
- pnpm 8.x or higher
- Docker and Docker Compose (for containerized deployment)

## Getting Started

### Using pnpm (Development)

1. **Install dependencies:**
   ```bash
   pnpm install
   ```

2. **Start development server:**
   ```bash
   pnpm start
   ```

3. **Open your browser:**
   Navigate to [http://localhost:4200](http://localhost:4200)

The application will automatically reload when you make changes to the source code.

### Using Docker

#### Production Build

Build and run the production-ready containerized application:

```bash
# Build and start the container
docker-compose up -d

# View logs
docker-compose logs -f

# Stop the container
docker-compose down
```

Access the application at [http://localhost:4200](http://localhost:4200)

#### Development with Docker

Run the development server with hot-reload inside a Docker container:

```bash
# Start development container
docker-compose --profile dev up hero-builder-dev

# Stop development container
docker-compose --profile dev down
```

Access the development server at [http://localhost:4201](http://localhost:4201)

## Available Scripts

- `pnpm start` - Start development server (port 4200)
- `pnpm build` - Build for production
- `pnpm test` - Run unit tests
- `pnpm watch` - Build in watch mode
- `pnpm serve` - Serve production build locally

## Project Structure

```
hero-builder/
├── src/
│   ├── app/
│   │   ├── components/          # Angular components
│   │   │   ├── hero/           # Hero display component
│   │   │   ├── hero-builder/  # Main container component
│   │   │   ├── hero-power/    # Individual power component
│   │   │   ├── build-controls/ # Controls for building hero
│   │   │   ├── build-control/  # Individual control component
│   │   │   └── layout/         # Layout wrapper component
│   │   ├── models/             # TypeScript interfaces
│   │   ├── services/           # Angular services (state management)
│   │   ├── app.ts              # Root component
│   │   ├── app.html            # Root template
│   │   └── app.config.ts       # App configuration
│   ├── assets/                 # Static assets (JSON data)
│   ├── styles.css              # Global styles
│   └── main.ts                 # Application entry point
├── Dockerfile                  # Docker production build
├── docker-compose.yml          # Docker Compose configuration
├── angular.json                # Angular CLI configuration
├── tsconfig.json              # TypeScript configuration
└── package.json               # Project dependencies

## Building for Production

### Standard Build

```bash
pnpm build
```

The build artifacts will be stored in the `dist/` directory.

### Docker Build

```bash
docker build -t hero-builder:latest .
docker run -p 4200:80 hero-builder:latest
```

## Docker Configuration

The project includes two Docker services:

1. **Production Service** (`hero-builder`):
   - Multi-stage build with Nginx
   - Optimized for production deployment
   - Accessible on port 4200

2. **Development Service** (`hero-builder-dev`):
   - Hot-reload enabled
   - Volume-mounted source code
   - Accessible on port 4201
   - Activated with `--profile dev`

## Learn More

- [Angular Documentation](https://angular.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [pnpm Documentation](https://pnpm.io/)
- [Docker Documentation](https://docs.docker.com/)

## License

This project is open source and available under the MIT License.
