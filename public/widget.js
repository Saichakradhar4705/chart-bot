(function () {
  'use strict';

  // ── CONFIG ────────────────────────────────────────────────────────────────
  // Change this if the chatbot server runs on a different URL
  const CHAT_URL = (function () {
    const s = document.currentScript;
    if (s && s.src) {
      const u = new URL(s.src);
      return u.origin; // e.g. http://localhost:5000
    }
    return 'http://localhost:5000';
  })();

  // ── STYLES ────────────────────────────────────────────────────────────────
  const css = `
    #iare-chat-btn {
      position: fixed;
      bottom: 28px;
      right: 28px;
      width: 62px;
      height: 62px;
      border-radius: 50%;
      background: linear-gradient(135deg, #003087, #1B5DBF);
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 26px;
      color: white;
      box-shadow: 0 6px 24px rgba(0, 48, 135, 0.6);
      z-index: 999998;
      transition: transform 0.25s cubic-bezier(.34,1.56,.64,1), box-shadow 0.25s;
      animation: iare-pulse 3s ease-in-out infinite;
    }
    #iare-chat-btn:hover {
      transform: scale(1.12);
      box-shadow: 0 10px 32px rgba(0, 48, 135, 0.8);
    }
    #iare-chat-btn.open {
      animation: none;
      transform: rotate(0deg);
      background: linear-gradient(135deg, #8B0015, #B8001C);
    }
    @keyframes iare-pulse {
      0%, 100% { box-shadow: 0 6px 24px rgba(0,48,135,.6); }
      50%       { box-shadow: 0 6px 32px rgba(0,48,135,.9), 0 0 0 8px rgba(0,48,135,.14); }
    }

    /* Unread badge */
    #iare-chat-badge {
      position: absolute;
      top: -2px;
      right: -2px;
      background: #e74c3c;
      color: #fff;
      font-size: 11px;
      font-weight: 700;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid #fff;
      font-family: sans-serif;
      animation: iare-badge-pop 0.4s cubic-bezier(.34,1.56,.64,1);
    }
    @keyframes iare-badge-pop {
      from { transform: scale(0); }
      to   { transform: scale(1); }
    }

    /* Modal overlay */
    #iare-chat-overlay {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.35);
      z-index: 999998;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.25s ease;
    }
    #iare-chat-overlay.visible {
      opacity: 1;
      pointer-events: all;
    }

    /* Modal popup */
    #iare-chat-modal {
      position: fixed;
      bottom: 104px;
      right: 28px;
      width: 400px;
      height: 600px;
      max-height: calc(100vh - 130px);
      border-radius: 22px;
      overflow: hidden;
      box-shadow: 0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.08);
      z-index: 999999;
      transform: scale(0.88) translateY(24px);
      transform-origin: bottom right;
      opacity: 0;
      pointer-events: none;
      transition: transform 0.3s cubic-bezier(.34,1.2,.64,1), opacity 0.25s ease;
      display: flex;
      flex-direction: column;
    }
    #iare-chat-modal.open {
      transform: scale(1) translateY(0);
      opacity: 1;
      pointer-events: all;
    }

    /* Modal header */
    #iare-modal-header {
      background: linear-gradient(135deg, #030d1f 0%, #003087 100%);
      padding: 14px 18px;
      display: flex;
      align-items: center;
      gap: 12px;
      flex-shrink: 0;
      border-bottom: 1px solid rgba(253, 184, 19, 0.25);
    }
    #iare-modal-header .iare-logo {
      width: 38px;
      height: 38px;
      border-radius: 11px;
      background: linear-gradient(135deg, #003087, #B8001C);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      flex-shrink: 0;
    }
    #iare-modal-header .iare-header-text {
      flex: 1;
      color: #f0f4ff;
    }
    #iare-modal-header .iare-header-text strong {
      display: block;
      font-size: 0.9rem;
      font-family: 'Inter', system-ui, sans-serif;
      font-weight: 700;
    }
    #iare-modal-header .iare-header-text span {
      font-size: 0.72rem;
      color: #8fa3c8;
      font-family: system-ui, sans-serif;
    }
    #iare-modal-header .iare-status {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      font-size: 0.72rem;
      color: #FDB813;
      font-family: system-ui, sans-serif;
    }
    #iare-modal-header .iare-status::before {
      content: '';
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: #FDB813;
      display: inline-block;
      animation: iare-blink 2.2s ease-in-out infinite;
    }
    @keyframes iare-blink {
      0%, 100% { opacity: 1; }
      50%       { opacity: 0.3; }
    }
    #iare-close-btn {
      width: 32px;
      height: 32px;
      border-radius: 9px;
      background: rgba(255,255,255,0.08);
      border: 1px solid rgba(255,255,255,0.12);
      color: #8fa3c8;
      font-size: 16px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.2s, color 0.2s;
      flex-shrink: 0;
      line-height: 1;
    }
    #iare-close-btn:hover {
      background: rgba(184,0,28,0.3);
      color: #e8001f;
      border-color: rgba(184,0,28,0.4);
    }

    /* iframe */
    #iare-chat-frame {
      flex: 1;
      width: 100%;
      border: none;
      background: #05071a;
    }

    /* Responsive */
    @media (max-width: 480px) {
      #iare-chat-modal {
        width: calc(100vw - 20px);
        right: 10px;
        bottom: 92px;
        border-radius: 18px;
      }
      #iare-chat-btn {
        bottom: 18px;
        right: 18px;
        width: 56px;
        height: 56px;
        font-size: 22px;
      }
    }
  `;

  // ── INJECT STYLES ─────────────────────────────────────────────────────────
  const styleEl = document.createElement('style');
  styleEl.textContent = css;
  document.head.appendChild(styleEl);

  // ── BUILD DOM ─────────────────────────────────────────────────────────────
  // Overlay (click to close)
  const overlay = document.createElement('div');
  overlay.id = 'iare-chat-overlay';
  document.body.appendChild(overlay);

  // Floating button
  const btn = document.createElement('button');
  btn.id = 'iare-chat-btn';
  btn.title = 'Chat with IARE Assistant';
  btn.setAttribute('aria-label', 'Open IARE chatbot');
  btn.innerHTML = '✈️';

  // Unread badge (shown initially to grab attention)
  const badge = document.createElement('span');
  badge.id = 'iare-chat-badge';
  badge.textContent = '1';
  btn.appendChild(badge);
  document.body.appendChild(btn);

  // Modal
  const modal = document.createElement('div');
  modal.id = 'iare-chat-modal';
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-label', 'IARE AI Chat Assistant');

  // Modal header
  modal.innerHTML = `
    <div id="iare-modal-header">
      <div class="iare-logo">✈️</div>
      <div class="iare-header-text">
        <strong>IARE Campus Assistant</strong>
        <span class="iare-status">Online · Powered by AI</span>
      </div>
      <button id="iare-close-btn" title="Close chat" aria-label="Close chat">✕</button>
    </div>
    <iframe
      id="iare-chat-frame"
      src="${CHAT_URL}/"
      title="IARE AI Chatbot"
      allow="clipboard-write"
    ></iframe>
  `;
  document.body.appendChild(modal);

  // ── TOGGLE LOGIC ─────────────────────────────────────────────────────────
  let isOpen = false;

  function openChat() {
    isOpen = true;
    modal.classList.add('open');
    overlay.classList.add('visible');
    btn.classList.add('open');
    btn.innerHTML = '✕'; // change icon to X
    btn.setAttribute('aria-label', 'Close chatbot');
    // Remove unread badge when opened
    const b = document.getElementById('iare-chat-badge');
    if (b) b.remove();
  }

  function closeChat() {
    isOpen = false;
    modal.classList.remove('open');
    overlay.classList.remove('visible');
    btn.classList.remove('open');
    btn.innerHTML = '✈️';
    btn.setAttribute('aria-label', 'Open IARE chatbot');
  }

  btn.addEventListener('click', () => isOpen ? closeChat() : openChat());
  overlay.addEventListener('click', closeChat);
  modal.querySelector('#iare-close-btn').addEventListener('click', closeChat);

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen) closeChat();
  });

})();
