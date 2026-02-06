import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './contextMenu.css';

const ContextMenu = () => {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const menuRef = useRef(null);
  const navigate = useNavigate();

  // Menu items with their routes and icons
  const menuItems = [
    {
      id: 'home',
      label: '🏠 Home',
      route: '/',
      shortcut: 'Ctrl+H'
    },
    {
      id: 'about',
      label: '📘 About Us',
      route: '/about',
      shortcut: 'Ctrl+A'
    },
    {
      id: 'courses',
      label: '🎓 Courses',
      route: '/courses',
      shortcut: 'Ctrl+C'
    },
    {
      id: 'careers',
      label: '💼 Careers',
      route: '/careers',
      shortcut: 'Ctrl+J'
    },
    {
      id: 'divider1',
      type: 'divider'
    },
    {
      id: 'terms',
      label: '📝 Terms & Conditions',
      route: '/terms',
      shortcut: 'Ctrl+T'
    },
    {
      id: 'privacy',
      label: '🔒 Privacy Policy',
      route: '/privacy-policy',
      shortcut: 'Ctrl+P'
    },
    {
      id: 'divider2',
      type: 'divider'
    },
    {
      id: 'back',
      label: '↩️ Back',
      action: 'back'
    },
    {
      id: 'forward',
      label: '↪️ Forward',
      action: 'forward'
    },
    {
      id: 'refresh',
      label: '🔄 Refresh',
      action: 'refresh',
      shortcut: 'F5'
    }
  ];

  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
      
      // Calculate position to ensure menu stays within viewport
      const x = Math.min(e.clientX, window.innerWidth - 250); // 250 is menu width
      const y = Math.min(e.clientY, window.innerHeight - 300); // 300 is menu height
      
      setPosition({ x, y });
      setVisible(true);
    };

    const handleClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setVisible(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setVisible(false);
      }
      
      // Handle keyboard shortcuts
      if (e.ctrlKey) {
        switch(e.key.toLowerCase()) {
          case 'h':
            e.preventDefault();
            navigate('/');
            setVisible(false);
            break;
          case 'a':
            e.preventDefault();
            navigate('/about');
            setVisible(false);
            break;
          case 'c':
            e.preventDefault();
            navigate('/courses');
            setVisible(false);
            break;
          case 'j':
            e.preventDefault();
            navigate('/careers');
            setVisible(false);
            break;
          case 't':
            e.preventDefault();
            navigate('/terms');
            setVisible(false);
            break;
          case 'p':
            e.preventDefault();
            navigate('/privacy-policy');
            setVisible(false);
            break;
        }
      }
    };

    // Add event listeners
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', handleKeyDown);

    // Prevent right-click on specific elements if needed
    const preventRightClick = (e) => {
      if (e.target.classList.contains('no-right-click')) {
        e.preventDefault();
        // Show custom message
        alert('Right-click is disabled on this element');
      }
    };
    
    document.addEventListener('contextmenu', preventRightClick);

    return () => {
      // Cleanup event listeners
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('contextmenu', preventRightClick);
    };
  }, [navigate]);

  const handleMenuItemClick = (item) => {
    if (item.route) {
      navigate(item.route);
    } else if (item.action) {
      switch(item.action) {
        case 'back':
          window.history.back();
          break;
        case 'forward':
          window.history.forward();
          break;
        case 'refresh':
          window.location.reload();
          break;
        default:
          break;
      }
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div 
      ref={menuRef}
      className="custom-context-menu"
      style={{
        position: 'fixed',
        left: position.x,
        top: position.y,
        zIndex: 999999
      }}
    >
      <div className="context-menu-header">
        <h6>🚀 Quick Navigation</h6>
        <span className="context-menu-subtitle">SoulKind Browser Tools</span>
      </div>
      
      <div className="context-menu-items">
        {menuItems.map((item) => {
          if (item.type === 'divider') {
            return <div key={item.id} className="context-menu-divider" />;
          }
          
          return (
            <button
              key={item.id}
              className="context-menu-item"
              data-aos="fade-right"
              onClick={() => handleMenuItemClick(item)}
            >
              <span className="context-menu-item-label">{item.label}</span>
              {item.shortcut && (
                <span data-aos="fade-right" className="context-menu-shortcut">{item.shortcut}</span>
              )}
            </button>
          );
        })}
      </div>
      
      <div className="context-menu-footer">
        <small>Right-click anywhere to open this menu</small>
      </div>
    </div>
  );
};

export default ContextMenu;