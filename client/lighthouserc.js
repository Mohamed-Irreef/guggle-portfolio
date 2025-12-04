export default {
  ci: {
    collect: {
      startServerCommand: 'npm run dev',
      startServerReadyPattern: 'Local:.*:5173',
      url: ['http://localhost:5173'],
      numberOfRuns: 3,
    },
    upload: {
      target: 'filesystem',
      outputDir: './lhci-reports',
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'categories:best-practices': ['error', { minScore: 0.9 }],
        'categories:seo': ['error', { minScore: 0.9 }],
      },
    },
  },
};
