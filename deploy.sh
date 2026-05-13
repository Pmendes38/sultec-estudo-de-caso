#!/bin/bash
# SULTEC WEBSITE - QUICK DEPLOYMENT COMMANDS
# Choose your platform and run the appropriate commands

echo "🚀 SULTEC WEBSITE - DEPLOYMENT OPTIONS"
echo "========================================"
echo ""
echo "1️⃣  VERCEL (Recommended - 2 minutes)"
echo "2️⃣  DOCKER (5 minutes)"
echo "3️⃣  SELF-HOSTED (10 minutes)"
echo "4️⃣  TEST LOCALLY FIRST"
echo ""
echo "========================================"
echo ""

# Option 4: Test locally first
test_locally() {
  echo "🔧 Testing locally before deployment..."
  npm install
  npm run build
  npm start
  echo "✅ Site running at http://localhost:3000"
}

# Option 1: Vercel
deploy_vercel() {
  echo "📦 Deploying to Vercel..."
  echo ""
  echo "Step 1: Push to GitHub"
  git add .
  git commit -m "Sultec website - clean rebuild ready for production"
  git push origin main
  echo "✅ Pushed to GitHub"
  echo ""
  echo "Step 2: Deploy to Vercel"
  echo "   a) Go to: https://vercel.com"
  echo "   b) Click 'New Project'"
  echo "   c) Import your GitHub repository"
  echo "   d) Vercel auto-detects Next.js"
  echo "   e) Click 'Deploy'"
  echo ""
  echo "✅ Your site will be live in 2 minutes!"
  echo "   Production URL: https://sultec-website.vercel.app (or custom domain)"
}

# Option 2: Docker
deploy_docker() {
  echo "🐳 Deploying with Docker..."
  echo ""
  echo "Step 1: Build Docker image"
  docker build -t sultec-website:latest .
  echo "✅ Docker image built"
  echo ""
  echo "Step 2: Test locally"
  docker run -p 3000:3000 sultec-website:latest
  echo "✅ Running at http://localhost:3000"
  echo ""
  echo "Step 3: Push to Docker Hub (optional)"
  docker tag sultec-website:latest your-username/sultec-website:latest
  docker push your-username/sultec-website:latest
  echo ""
  echo "Step 4: Deploy to server"
  echo "   ssh user@your-domain.com"
  echo "   docker run -d -p 80:3000 sultec-website:latest"
}

# Option 3: Self-hosted
deploy_selfhosted() {
  echo "🖥️  Self-hosted deployment..."
  echo ""
  echo "Step 1: SSH to your server"
  echo "   ssh user@your-domain.com"
  echo ""
  echo "Step 2: Clone and setup"
  echo "   git clone https://github.com/yourusername/sultec-website.git"
  echo "   cd sultec-website"
  echo "   npm install"
  echo "   npm run build"
  echo ""
  echo "Step 3: Start with PM2"
  echo "   npm install -g pm2"
  echo "   pm2 start npm --name 'sultec' -- start"
  echo "   pm2 startup"
  echo "   pm2 save"
  echo ""
  echo "Step 4: Setup Nginx reverse proxy"
  echo "   See DEPLOYMENT.md for full nginx config"
  echo ""
  echo "Step 5: SSL with Let's Encrypt"
  echo "   certbot certonly --standalone -d your-domain.com"
}

# Main menu
read -p "Choose deployment option (1-4): " choice

case $choice in
  1)
    deploy_vercel
    ;;
  2)
    deploy_docker
    ;;
  3)
    deploy_selfhosted
    ;;
  4)
    test_locally
    ;;
  *)
    echo "❌ Invalid option. Please choose 1-4"
    exit 1
    ;;
esac

echo ""
echo "========================================"
echo "✅ Ready to deploy!"
echo "========================================"
echo ""
echo "📚 For more details, see:"
echo "   - DEPLOYMENT.md"
echo "   - READY_TO_DEPLOY.md"
echo "   - README.md"
