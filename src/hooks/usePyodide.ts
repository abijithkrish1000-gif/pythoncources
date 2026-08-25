import { useState, useEffect, useCallback, useRef } from 'react';

const PYODIDE_VERSION = 'v0.26.2';
const PYODIDE_INDEX = `https://cdn.jsdelivr.net/pyodide/${PYODIDE_VERSION}/full/`;

let pyodidePromise: Promise<any> | null = null;

function loadPyodideOnce(): Promise<any> {
  if (pyodidePromise) return pyodidePromise;
  pyodidePromise = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = `${PYODIDE_INDEX}pyodide.js`;
    script.onload = async () => {
      try {
        const py = await (window as any).loadPyodide({ indexURL: PYODIDE_INDEX });
        resolve(py);
      } catch (err) {
        reject(err);
      }
    };
    script.onerror = () => reject(new Error('Failed to load Pyodide'));
    document.head.appendChild(script);
  });
  return pyodidePromise;
}

export interface RunResult {
  output: string;
  error: boolean;
}

export function usePyodide() {
  const [ready, setReady] = useState(false);
  const [loading, setLoading] = useState(true);
  const pyodideRef = useRef<any>(null);

  useEffect(() => {
    let mounted = true;
    loadPyodideOnce()
      .then((py) => {
        if (!mounted) return;
        pyodideRef.current = py;
        setReady(true);
        setLoading(false);
      })
      .catch(() => {
        if (!mounted) return;
        setLoading(false);
      });
    return () => {
      mounted = false;
    };
  }, []);

  const runCode = useCallback(async (code: string): Promise<RunResult> => {
    const py = pyodideRef.current;
    if (!py) return { output: 'Python runtime not ready yet.', error: true };

    let stdout = '';
    let stderr = '';
    py.setStdout({ batched: (s: string) => (stdout += s + '\n') });
    py.setStderr({ batched: (s: string) => (stderr += s + '\n') });

    try {
      await py.runPythonAsync(code);
      return { output: stdout.trim(), error: false };
    } catch (err: any) {
      return { output: (stderr.trim() || String(err)).trim(), error: true };
    }
  }, []);

  return { ready, loading, runCode };
}
