import {
  Box,
  Grid,
  TextField,
  Button,
  Typography,
  Paper,
  Skeleton,
} from "@mui/material";
import useSkeleton from "../hooks/useSkeleton";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const EMAIL = "sciedgeinnovations@gmail.com";

export default function Contact() {
  const loading = useSkeleton(500);
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!formRef.current) return;
    try {
      setSending(true);
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID",
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID",
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY"
      );
      alert("Message sent! We will respond soon.");
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      alert("Failed to send. Please email us directly.");
    } finally {
      setSending(false);
    }
  };

  return (
    <Box sx={{ py: 6 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Contact
      </Typography>
      <Typography color="text.secondary" sx={{ mb: 3 }}>
        Have a question or want to explore a collaboration? Send us a note and
        we'll get back within 1–2 business days.
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={7}>
          <Paper sx={{ p: { xs: 2, md: 3 }, borderRadius: 3 }}>
            {loading ? (
              <>
                <Skeleton variant="rounded" height={44} sx={{ mb: 1 }} />
                <Skeleton variant="rounded" height={44} sx={{ mb: 1 }} />
                <Skeleton variant="rounded" height={44} sx={{ mb: 1 }} />
                <Skeleton variant="rounded" height={120} />
              </>
            ) : (
              <form ref={formRef} onSubmit={onSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Full Name"
                      name="name"
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email"
                      type="email"
                      name="email"
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="Organization" name="org" />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="Role" name="role" />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="How can we help?"
                      multiline
                      rows={4}
                      name="message"
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      disabled={sending}
                      type="submit"
                      variant="contained"
                    >
                      {sending ? "Sending..." : "Submit Inquiry"}
                    </Button>
                  </Grid>
                </Grid>
              </form>
            )}
          </Paper>
        </Grid>
        <Grid item xs={12} md={5}>
          <Paper sx={{ p: { xs: 2, md: 3 }, borderRadius: 3, height: "100%" }}>
            {loading ? (
              <Skeleton variant="rectangular" height={240} />
            ) : (
              <>
                <Typography variant="subtitle1">Contact Details:</Typography>
                <Typography color="text.secondary">{EMAIL}</Typography>
                {/* <Typography color="text.secondary">+1 (415) 555-0134</Typography> */}
                <Typography color="text.secondary">
                  HSR Layout, Bengaluru, Karnataka - 560102
                </Typography>
                <Box
                  sx={{
                    mt: 2,
                    height: 220,
                    borderRadius: 2,
                    overflow: "hidden",
                    background:
                      "radial-gradient(300px 180px at 30% 40%, rgba(65,201,226,0.2), transparent 60%), radial-gradient(220px 140px at 70% 60%, rgba(142,240,212,0.2), transparent 60%), linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
                  }}
                />
              </>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
